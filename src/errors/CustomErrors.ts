export class PerfilJaCadastradoError extends Error {
    constructor() {
        super('Perfil já cadastrado');
        this.name = 'PerfilJaCadastradoError';
    }
}

export class PerfilNaoAutorizadoError extends Error {
    constructor() {
        super('Perfil não autorizado para esta operação');
        this.name = 'PerfilNaoAutorizadoError';
    }
}

export class PerfilInativoError extends Error {
    constructor() {
        super('Perfil está inativo');
        this.name = 'PerfilInativoError';
    }
}

export class InteracaoDuplicadaError extends Error {
    constructor() {
        super('Interação já existe');
        this.name = 'InteracaoDuplicadaError';
    }
}

export class AmizadeJaExistenteError extends Error {
    constructor() {
        super('Amizade já existe');
        this.name = 'AmizadeJaExistenteError';
    }
}

export class ValorInvalidoException extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = 'ValorInvalidoException';
    }
} 