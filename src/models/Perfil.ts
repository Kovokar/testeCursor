import { Publicacao } from './Publicacao';
import { AmizadeJaExistenteError, PerfilInativoError } from '../errors/CustomErrors';

export class Perfil {
    private _id: string;
    private _apelido: string;
    private _foto: string;
    private _email: string;
    private _senha: string;
    private _status: boolean;
    private _amigos: Perfil[];
    private _postagens: Publicacao[];

    constructor(id: string, apelido: string, foto: string, email: string, senha: string) {
        this._id = id;
        this._apelido = apelido;
        this._foto = foto;
        this._email = email;
        this._senha = senha;
        this._status = true;
        this._amigos = [];
        this._postagens = [];
    }

    public autenticar(email: string, senha: string): boolean {
        return this._email === email && this._senha === senha;
    }

    public adicionarAmigo(amigo: Perfil): void {
        if (this._amigos.includes(amigo)) {
            throw new AmizadeJaExistenteError();
        }
        this._amigos.push(amigo);
    }

    public removerAmigo(amigo: Perfil): void {
        const index = this._amigos.indexOf(amigo);
        if (index > -1) {
            this._amigos.splice(index, 1);
        }
    }

    public adicionarPublicacao(publicacao: Publicacao): void {
        if (!this._status) {
            throw new PerfilInativoError();
        }
        this._postagens.push(publicacao);
    }

    public listarAmigos(): Perfil[] {
        return [...this._amigos];
    }

    public listarPostagens(): Publicacao[] {
        return [...this._postagens];
    }

    public alterarStatus(): void {
        this._status = !this._status;
    }

    // Getters
    get id(): string { return this._id; }
    get apelido(): string { return this._apelido; }
    get email(): string { return this._email; }
    get status(): boolean { return this._status; }
} 