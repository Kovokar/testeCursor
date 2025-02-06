"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MenuLogin = void 0;
var RedeSocial_1 = require("../models/RedeSocial");
var Menu_1 = require("./Menu");
var Perfil_1 = require("../models/Perfil");
var ReadlineService_1 = require("../utils/ReadlineService");
var MenuLogin = /** @class */ (function () {
    function MenuLogin() {
        this.redeSocial = new RedeSocial_1.RedeSocial();
    }
    MenuLogin.prototype.iniciar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var opcao, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 13];
                        console.log('\n=== Bem-vindo à Rede Social ===');
                        console.log('1. Login');
                        console.log('2. Criar Conta');
                        console.log('3. Recuperar Senha');
                        console.log('4. Sair');
                        opcao = this.pergunta('Escolha uma opção: ');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 11, , 12]);
                        _a = opcao;
                        switch (_a) {
                            case '1': return [3 /*break*/, 2];
                            case '2': return [3 /*break*/, 4];
                            case '3': return [3 /*break*/, 6];
                            case '4': return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 9];
                    case 2: return [4 /*yield*/, this.fazerLogin()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 4: return [4 /*yield*/, this.criarConta()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 6: return [4 /*yield*/, this.recuperarSenha()];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        console.log('Até logo!');
                        ReadlineService_1.ReadlineService.close();
                        return [2 /*return*/];
                    case 9:
                        console.log('Opção inválida!');
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        error_1 = _b.sent();
                        console.error('Erro:', error_1.message);
                        return [3 /*break*/, 12];
                    case 12: return [3 /*break*/, 0];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    MenuLogin.prototype.fazerLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var email, senha, perfil, menu;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('\n=== Entrar na Rede Social ===');
                        email = this.pergunta('�� Email: ');
                        senha = this.pergunta('🔑 Senha: ');
                        perfil = this.redeSocial.listarPerfis().find(function (p) { return p.autenticar(email, senha); });
                        if (!perfil) return [3 /*break*/, 2];
                        console.log("\n\uD83C\uDF89 Bem-vindo(a) de volta, ".concat(perfil.apelido, "!"));
                        menu = new Menu_1.Menu(this.redeSocial, perfil);
                        return [4 /*yield*/, menu.iniciar()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        console.log('❌ Email ou senha incorretos');
                        console.log('💡 Dica: Se não tem conta, escolha a opção "Criar Conta"');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MenuLogin.prototype.criarConta = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, apelido, email, senha, foto, perfil;
            return __generator(this, function (_a) {
                console.log('\n=== Criar Nova Conta ===');
                console.log('Vamos começar! Precisamos de algumas informações:');
                id = Date.now().toString();
                apelido = this.pergunta('👤 Como quer ser chamado? ');
                email = this.pergunta('📧 Qual seu melhor email? ');
                senha = this.pergunta('🔑 Escolha uma senha: ');
                foto = this.pergunta('😊 Escolha um emoji para seu perfil: ');
                try {
                    perfil = new Perfil_1.Perfil(id, apelido, foto, email, senha);
                    perfil.setRedeSocial(this.redeSocial);
                    this.redeSocial.adicionarPerfil(perfil);
                    console.log('\n✨ Conta criada com sucesso!');
                    console.log('🎉 Bem-vindo(a) à nossa rede social!');
                }
                catch (error) {
                    console.error('❌ Ops! Algo deu errado:', error.message);
                }
                return [2 /*return*/];
            });
        });
    };
    MenuLogin.prototype.recuperarSenha = function () {
        return __awaiter(this, void 0, void 0, function () {
            var email, codigo, novaSenha;
            return __generator(this, function (_a) {
                email = this.pergunta('Digite seu email: ');
                console.log('Um código de recuperação foi enviado para seu email.');
                codigo = this.pergunta('Digite o código recebido: ');
                if (codigo === '123456') { // Código simulado
                    novaSenha = this.pergunta('Digite sua nova senha: ');
                    console.log('Senha alterada com sucesso!');
                }
                else {
                    console.log('Código inválido!');
                }
                return [2 /*return*/];
            });
        });
    };
    MenuLogin.prototype.pergunta = function (pergunta) {
        return ReadlineService_1.ReadlineService.pergunta(pergunta);
    };
    return MenuLogin;
}());
exports.MenuLogin = MenuLogin;
