import { RedeSocial } from '../models/RedeSocial';
import { Menu } from './Menu';
import { Perfil } from '../models/Perfil';
import { ReadlineService } from '../utils/ReadlineService';

export class MenuLogin {
    private redeSocial: RedeSocial;

    constructor() {
        this.redeSocial = new RedeSocial();
    }

    public async iniciar(): Promise<void> {
        while (true) {
            console.log('\n=== Bem-vindo à Rede Social ===');
            console.log('1. Login');
            console.log('2. Criar Conta');
            console.log('3. Recuperar Senha');
            console.log('4. Sair');

            const opcao = this.pergunta('Escolha uma opção: ');

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
                        ReadlineService.close();
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
        console.log('\n=== Entrar na Rede Social ===');
        const email = this.pergunta('�� Email: ');
        const senha = this.pergunta('🔑 Senha: ');

        const perfil = this.redeSocial.listarPerfis().find(p => p.autenticar(email, senha));

        if (perfil) {
            console.log(`\n🎉 Bem-vindo(a) de volta, ${perfil.apelido}!`);
            const menu = new Menu(this.redeSocial, perfil);
            await menu.iniciar();
        } else {
            console.log('❌ Email ou senha incorretos');
            console.log('💡 Dica: Se não tem conta, escolha a opção "Criar Conta"');
        }
    }

    private async criarConta(): Promise<void> {
        console.log('\n=== Criar Nova Conta ===');
        console.log('Vamos começar! Precisamos de algumas informações:');
        
        const id = Date.now().toString();
        const apelido = this.pergunta('👤 Como quer ser chamado? ');
        const email = this.pergunta('📧 Qual seu melhor email? ');
        const senha = this.pergunta('🔑 Escolha uma senha: ');
        const foto = this.pergunta('😊 Escolha um emoji para seu perfil: ');

        try {
            const perfil = new Perfil(id, apelido, foto, email, senha);
            perfil.setRedeSocial(this.redeSocial);
            this.redeSocial.adicionarPerfil(perfil);
            console.log('\n✨ Conta criada com sucesso!');
            console.log('🎉 Bem-vindo(a) à nossa rede social!');
        } catch (error: any) {
            console.error('❌ Ops! Algo deu errado:', error.message);
        }
    }

    private async recuperarSenha(): Promise<void> {
        const email = this.pergunta('Digite seu email: ');
        console.log('Um código de recuperação foi enviado para seu email.');
        
        const codigo = this.pergunta('Digite o código recebido: ');
        if (codigo === '123456') { // Código simulado
            const novaSenha = this.pergunta('Digite sua nova senha: ');
            console.log('Senha alterada com sucesso!');
        } else {
            console.log('Código inválido!');
        }
    }

    private pergunta(pergunta: string): string {
        return ReadlineService.pergunta(pergunta);
    }
} 