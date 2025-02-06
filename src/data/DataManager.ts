import * as fs from 'fs';
import { Perfil } from '../models/Perfil';
import { Publicacao } from '../models/Publicacao';
import { PublicacaoAvancada } from '../models/PublicacaoAvancada';

interface PerfilData {
    id: string;
    apelido: string;
    foto: string;
    email: string;
    senha: string;
    status: boolean;
    amigos: string[]; // IDs dos amigos
    postagens: PublicacaoData[];
}

interface PublicacaoData {
    id: string;
    conteudo: string;
    dataHora: string;
    perfilId: string;
    tipo: 'normal' | 'avancada';
    interacoes?: InteracaoData[];
}

interface InteracaoData {
    id: string;
    tipo: string;
    perfilId: string;
}

interface RedeSocialData {
    perfis: PerfilData[];
    solicitacoesPendentes: [string, string][]; // [idSolicitante, idSolicitado][]
}

export class DataManager {
    private static readonly ARQUIVO_DADOS = 'dados_rede_social.json';

    public static salvarDados(perfis: Perfil[], solicitacoesPendentes: Map<string, string>): void {
        const dados: RedeSocialData = {
            perfis: perfis.map(p => ({
                id: p.id,
                apelido: p.apelido,
                foto: p.foto,
                email: p.email,
                senha: p['_senha'], // Acessando propriedade privada
                status: p.status,
                amigos: p.listarAmigos().map(a => a.id),
                postagens: p.listarPostagens().map(pub => ({
                    id: pub.id,
                    conteudo: pub.conteudo,
                    dataHora: pub.dataHora.toISOString(),
                    perfilId: pub.perfil.id,
                    tipo: pub instanceof PublicacaoAvancada ? 'avancada' : 'normal',
                    interacoes: pub instanceof PublicacaoAvancada ? 
                        pub.listarInteracoes().map(i => ({
                            id: i['_id'],
                            tipo: i['_tipo'],
                            perfilId: i.perfil.id
                        })) : undefined
                }))
            })),
            solicitacoesPendentes: Array.from(solicitacoesPendentes.entries())
        };

        fs.writeFileSync(this.ARQUIVO_DADOS, JSON.stringify(dados, null, 2));
    }

    public static carregarDados(): RedeSocialData | null {
        try {
            if (fs.existsSync(this.ARQUIVO_DADOS)) {
                const dados = JSON.parse(fs.readFileSync(this.ARQUIVO_DADOS, 'utf-8'));
                return dados;
            }
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
        return null;
    }
} 