import { Perfil } from './Perfil';
import { Publicacao } from './Publicacao';
import { PublicacaoAvancada } from './PublicacaoAvancada';
import { PerfilJaCadastradoError, ValorInvalidoException } from '../errors/CustomErrors';
import { DataManager } from '../data/DataManager';

export class RedeSocial {
    private _perfis: Perfil[];
    private _publicacoes: Publicacao[];
    private _solicitacoesPendentes: Map<string, string>; // ID do solicitante -> ID do solicitado

    constructor() {
        this._perfis = [];
        this._publicacoes = [];
        this._solicitacoesPendentes = new Map();
        this.carregarDados();
    }

    private carregarDados(): void {
        const dados = DataManager.carregarDados();
        if (dados) {
            // Carregar perfis
            dados.perfis.forEach(perfilData => {
                const perfil = new Perfil(
                    perfilData.id,
                    perfilData.apelido,
                    perfilData.foto,
                    perfilData.email,
                    perfilData.senha
                );
                this._perfis.push(perfil);
            });

            // Carregar amizades
            dados.perfis.forEach(perfilData => {
                const perfil = this.buscarPerfil(perfilData.id);
                if (perfil) {
                    perfilData.amigos.forEach(amigoId => {
                        const amigo = this.buscarPerfil(amigoId);
                        if (amigo) {
                            try {
                                perfil.adicionarAmigo(amigo);
                            } catch (error) {
                                // Ignora amizades duplicadas
                            }
                        }
                    });
                }
            });

            // Carregar solicitações pendentes
            dados.solicitacoesPendentes.forEach(([idSolicitante, idSolicitado]) => {
                this._solicitacoesPendentes.set(idSolicitante, idSolicitado);
            });

            // Carregar publicações
            dados.perfis.forEach(perfilData => {
                const perfil = this.buscarPerfil(perfilData.id);
                if (perfil) {
                    perfilData.postagens.forEach(pubData => {
                        const Classe = pubData.tipo === 'avancada' ? PublicacaoAvancada : Publicacao;
                        const publicacao = new Classe(
                            pubData.id,
                            pubData.conteudo,
                            perfil
                        );
                        perfil.adicionarPublicacao(publicacao);
                    });
                }
            });
        }
    }

    public salvarDados(): void {
        DataManager.salvarDados(this._perfis, this._solicitacoesPendentes);
    }

    public adicionarPerfil(perfil: Perfil): void {
        if (this._perfis.some(p => p.email === perfil.email || p.id === perfil.id)) {
            throw new PerfilJaCadastradoError();
        }
        this._perfis.push(perfil);
        this.salvarDados();
    }

    public adicionarPublicacao(publicacao: Publicacao): void {
        this._publicacoes.push(publicacao);
        this.salvarDados();
    }

    public buscarPerfil(identificador: string): Perfil | undefined {
        return this._perfis.find(p => 
            p.id === identificador || 
            p.email === identificador || 
            p.apelido === identificador
        );
    }

    public listarPerfis(): Perfil[] {
        return [...this._perfis];
    }

    public enviarSolicitacaoAmizade(idSolicitante: string, idSolicitado: string): void {
        const solicitante = this.buscarPerfil(idSolicitante);
        const solicitado = this.buscarPerfil(idSolicitado);

        if (!solicitante || !solicitado) {
            throw new ValorInvalidoException('Perfil não encontrado');
        }

        this._solicitacoesPendentes.set(idSolicitante, idSolicitado);
        this.salvarDados();
    }

    public aceitarSolicitacao(idSolicitante: string, idSolicitado: string): void {
        const solicitante = this.buscarPerfil(idSolicitante);
        const solicitado = this.buscarPerfil(idSolicitado);

        if (!solicitante || !solicitado) {
            throw new ValorInvalidoException('Perfil não encontrado');
        }

        solicitante.adicionarAmigo(solicitado);
        solicitado.adicionarAmigo(solicitante);
        this._solicitacoesPendentes.delete(idSolicitante);
        this.salvarDados();
    }

    public recusarSolicitacao(idSolicitante: string): void {
        this._solicitacoesPendentes.delete(idSolicitante);
        this.salvarDados();
    }
} 