import { Publicacao } from './Publicacao';
import { Perfil } from './Perfil';
import { Interacao } from './Interacao';
import { InteracaoDuplicadaError } from '../errors/CustomErrors';

export class PublicacaoAvancada extends Publicacao {
    private _interacoes: Interacao[];

    constructor(id: string, conteudo: string, perfil: Perfil) {
        super(id, conteudo, perfil);
        this._interacoes = [];
    }

    public adicionarInteracao(interacao: Interacao): void {
        if (this._interacoes.some(i => i.perfil.id === interacao.perfil.id)) {
            throw new InteracaoDuplicadaError();
        }
        this._interacoes.push(interacao);
    }

    public listarInteracoes(): Interacao[] {
        return [...this._interacoes];
    }
} 