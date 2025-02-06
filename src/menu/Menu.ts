import { RedeSocial } from '../models/RedeSocial';
import { Perfil } from '../models/Perfil';
import { Publicacao } from '../models/Publicacao';
import { PublicacaoAvancada } from '../models/PublicacaoAvancada';
import { ReadlineService } from '../utils/ReadlineService';

export class Menu {
    private redeSocial: RedeSocial;
    private perfilLogado: Perfil;

    constructor(redeSocial: RedeSocial, perfilLogado: Perfil) {
        this.redeSocial = redeSocial;
        this.perfilLogado = perfilLogado;
    }

    public async iniciar(): Promise<void> {
        while (true) {
            console.log('\n=== Menu Principal ===');
            console.log('1. Gerenciar Perfis');
            console.log('2. Gerenciar Publicações');
            console.log('3. Gerenciar Amizades');
            console.log('4. Sair');

            const opcao = this.pergunta('Escolha uma opção: ');

            try {
                switch (opcao) {
                    case '1':
                        await this.menuPerfis();
                        break;
                    case '2':
                        await this.menuPublicacoes();
                        break;
                    case '3':
                        await this.menuAmizades();
                        break;
                    case '4':
                        return;
                    default:
                        console.log('Opção inválida!');
                }
            } catch (error: any) {
                console.error('Erro:', error.message);
            }
        }
    }

    private async menuPerfis(): Promise<void> {
        console.log('\n=== Gerenciar Perfis ===');
        console.log('1. Listar perfis');
        console.log('2. Buscar perfil');
        console.log('3. Voltar');

        const opcao = this.pergunta('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                this.listarPerfis();
                break;
            case '2':
                await this.buscarPerfil();
                break;
            case '3':
                return;
            default:
                console.log('Opção inválida!');
        }
    }

    private async menuPublicacoes(): Promise<void> {
        console.log('\n=== Gerenciar Publicações ===');
        console.log('1. Criar publicação');
        console.log('2. Listar publicações');
        console.log('3. Criar publicação avançada');
        console.log('4. Voltar');

        const opcao = this.pergunta('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await this.criarPublicacao();
                break;
            case '2':
                this.listarPublicacoes();
                break;
            case '3':
                await this.criarPublicacaoAvancada();
                break;
            case '4':
                return;
            default:
                console.log('Opção inválida!');
        }
    }

    private async menuAmizades(): Promise<void> {
        console.log('\n=== Gerenciar Amizades ===');
        console.log('1. Enviar solicitação');
        console.log('2. Aceitar solicitação');
        console.log('3. Recusar solicitação');
        console.log('4. Voltar');

        const opcao = this.pergunta('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await this.enviarSolicitacao();
                break;
            case '2':
                await this.aceitarSolicitacao();
                break;
            case '3':
                await this.recusarSolicitacao();
                break;
            case '4':
                return;
            default:
                console.log('Opção inválida!');
        }
    }

    private pergunta(pergunta: string): string {
        return ReadlineService.pergunta(pergunta);
    }

    private listarPerfis(): void {
        const perfis = this.redeSocial.listarPerfis();
        console.log('\nPerfis cadastrados:');
        perfis.forEach(p => console.log(`ID: ${p.id}, Apelido: ${p.apelido}, Email: ${p.email}`));
    }

    private async buscarPerfil(): Promise<void> {
        const identificador = this.pergunta('Digite o ID, email ou apelido do perfil: ');
        const perfil = this.redeSocial.buscarPerfil(identificador);
        
        if (perfil) {
            console.log(`\nPerfil encontrado:\nID: ${perfil.id}\nApelido: ${perfil.apelido}\nEmail: ${perfil.email}`);
        } else {
            console.log('Perfil não encontrado.');
        }
    }

    private async enviarSolicitacao(): Promise<void> {
        const idSolicitado = this.pergunta('Digite o ID, email ou apelido do perfil que deseja adicionar: ');

        try {
            this.redeSocial.enviarSolicitacaoAmizade(this.perfilLogado.id, idSolicitado);
            console.log('Solicitação enviada com sucesso!');
        } catch (error: any) {
            console.error('Erro ao enviar solicitação:', error.message);
        }
    }

    private async aceitarSolicitacao(): Promise<void> {
        const idSolicitante = this.pergunta('Digite o ID, email ou apelido de quem enviou a solicitação: ');

        try {
            this.redeSocial.aceitarSolicitacao(idSolicitante, this.perfilLogado.id);
            console.log('Solicitação aceita com sucesso!');
        } catch (error: any) {
            console.error('Erro ao aceitar solicitação:', error.message);
        }
    }

    private async recusarSolicitacao(): Promise<void> {
        const idSolicitante = this.pergunta('Digite o ID de quem enviou a solicitação: ');

        try {
            this.redeSocial.recusarSolicitacao(idSolicitante);
            console.log('Solicitação recusada com sucesso!');
        } catch (error: any) {
            console.error('Erro ao recusar solicitação:', error.message);
        }
    }

    private async criarPublicacao(): Promise<void> {
        const conteudo = this.pergunta('Digite o conteúdo da publicação: ');
        const id = Date.now().toString(); // ID único baseado no timestamp

        try {
            const publicacao = new Publicacao(id, conteudo, this.perfilLogado);
            this.perfilLogado.adicionarPublicacao(publicacao);
            console.log('Publicação criada com sucesso!');
        } catch (error: any) {
            console.error('Erro ao criar publicação:', error.message);
        }
    }

    private async criarPublicacaoAvancada(): Promise<void> {
        const conteudo = this.pergunta('Digite o conteúdo da publicação: ');
        const id = Date.now().toString();

        try {
            const publicacao = new PublicacaoAvancada(id, conteudo, this.perfilLogado);
            this.perfilLogado.adicionarPublicacao(publicacao);
            console.log('Publicação avançada criada com sucesso!');
        } catch (error: any) {
            console.error('Erro ao criar publicação avançada:', error.message);
        }
    }

    private listarPublicacoes(): void {
        const perfis = this.redeSocial.listarPerfis();
        console.log('\nPublicações:');
        
        perfis.forEach(perfil => {
            const publicacoes = perfil.listarPostagens();
            publicacoes.forEach(pub => {
                console.log(`\nID: ${pub.id}`);
                console.log(`Autor: ${pub.perfil.apelido}`);
                console.log(`Conteúdo: ${pub.conteudo}`);
                console.log(`Data: ${pub.dataHora.toLocaleString()}`);
            });
        });
    }

    // Implementar outros métodos do menu...
} 