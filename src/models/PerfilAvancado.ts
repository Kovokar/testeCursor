import { Perfil } from './Perfil';

export class PerfilAvancado extends Perfil {
    public habilitarPerfil(perfil: Perfil): void {
        perfil.alterarStatus();
    }
} 