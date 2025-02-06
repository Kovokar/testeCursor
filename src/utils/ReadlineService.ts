import * as readlineSync from 'readline-sync';

export class ReadlineService {
    public static pergunta(pergunta: string): string {
        return readlineSync.question(pergunta);
    }

    public static close(): void {
        // Não é necessário fechar com readline-sync
    }
} 