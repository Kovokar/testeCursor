import * as readline from 'readline';
import { RedeSocial } from '../models/RedeSocial';
import { Menu } from './Menu';
import { Perfil } from '../models/Perfil';

export class MenuLogin {
    private rl: readline.Interface;
    private redeSocial: RedeSocial;

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.redeSocial = new RedeSocial();
    }

    public async iniciar(): Promise<void> {
        while (true) {
            console.log('\n=== Bem-vindo à Rede Social ===');
            console.log('1. Login');
            console.log('2. Criar Conta');
            console.log('3. Recuperar Senha');
            console.log('4. Sair');

            const opcao = await this.pergunta('Escolha uma opção: ');

            try {
                switch (opcao) {
                    case '1':
                        await this.fazerLogin();
                        break;
                    case '2':
                        await this.criarConta();
                        break;
                    case '3':
                        await this.recuperarSenha();
                        break;
                    case '4':
                        console.log('Até logo!');
                        this.rl.close();
                        return;
                    default:
                        console.log('Opção inválida!');
                }
            } catch (error: any) {
                console.error('Erro:', error.message);
            }
        }
    }

    private async fazerLogin(): Promise<void> {
        const email = await this.pergunta('Email: ');
        const senha = await this.pergunta('Senha: ');

        const perfil = this.redeSocial.listarPerfis().find(p => p.autenticar(email, senha));

        if (perfil) {
            console.log(`\nBem-vindo(a) de volta, ${perfil.apelido}!`);
            const menu = new Menu(this.redeSocial, perfil);
            await menu.iniciar();
        } else {
            console.log('Email ou senha incorretos!');
        }
    }

    private async criarConta(): Promise<void> {
        const id = Date.now().toString();
        const apelido = await this.pergunta('Nome de usuário: ');
        const email = await this.pergunta('Email: ');
        const senha = await this.pergunta('Senha: ');
        const foto = await this.pergunta('Foto (emoji): ');

        try {
            const perfil = new Perfil(id, apelido, foto, email, senha);
            this.redeSocial.adicionarPerfil(perfil);
            console.log('Conta criada com sucesso!');
        } catch (error: any) {
            console.error('Erro ao criar conta:', error.message);
        }
    }

    private async recuperarSenha(): Promise<void> {
        const email = await this.pergunta('Digite seu email: ');
        console.log('Um código de recuperação foi enviado para seu email.');
        
        const codigo = await this.pergunta('Digite o código recebido: ');
        if (codigo === '123456') { // Código simulado
            const novaSenha = await this.pergunta('Digite sua nova senha: ');
            console.log('Senha alterada com sucesso!');
        } else {
            console.log('Código inválido!');
        }
    }

    private pergunta(pergunta: string): Promise<string> {
        return new Promise((resolve) => {
            this.rl.question(pergunta, (resposta) => {
                resolve(resposta);
            });
        });
    }
} 