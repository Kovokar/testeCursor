import { Perfil } from './Perfil';

export class Publicacao {
    private _id: string;
    private _conteudo: string;
    private _dataHora: Date;
    private _perfil: Perfil;

    constructor(id: string, conteudo: string, perfil: Perfil) {
        this._id = id;
        this._conteudo = conteudo;
        this._dataHora = new Date();
        this._perfil = perfil;
    }

    // Getters
    get id(): string { return this._id; }
    get conteudo(): string { return this._conteudo; }
    get dataHora(): Date { return this._dataHora; }
    get perfil(): Perfil { return this._perfil; }
} 