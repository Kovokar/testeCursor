import { Perfil } from './Perfil';

export class Interacao {
    constructor(
        private _id: string,
        private _tipo: string,
        private _perfil: Perfil
    ) {}

    get perfil(): Perfil {
        return this._perfil;
    }
} 