import { Perfil } from './Perfil';
import { Publicacao } from './Publicacao';
import { PerfilJaCadastradoError, ValorInvalidoException } from '../errors/CustomErrors';

export class RedeSocial {
    private _perfis: Perfil[];
    private _publicacoes: Publicacao[];
    private _solicitacoesPendentes: Map<string, string>; // ID do solicitante -> ID do solicitado

    constructor() {
        this._perfis = [];
        this._publicacoes = [];
        this._solicitacoesPendentes = new Map();
    }

    public adicionarPerfil(perfil: Perfil): void {
        if (this._perfis.some(p => p.email === perfil.email || p.id === perfil.id)) {
            throw new PerfilJaCadastradoError();
        }
        this._perfis.push(perfil);
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
    }

    public recusarSolicitacao(idSolicitante: string): void {
        this._solicitacoesPendentes.delete(idSolicitante);
    }
} 