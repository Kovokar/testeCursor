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
var readline = require("readline");
var RedeSocial_1 = require("../models/RedeSocial");
var Menu_1 = require("./Menu");
var Perfil_1 = require("../models/Perfil");
var MenuLogin = /** @class */ (function () {
    function MenuLogin() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.redeSocial = new RedeSocial_1.RedeSocial();
    }
    MenuLogin.prototype.iniciar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var opcao, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 14];
                        console.log('\n=== Bem-vindo à Rede Social ===');
                        console.log('1. Login');
                        console.log('2. Criar Conta');
                        console.log('3. Recuperar Senha');
                        console.log('4. Sair');
                        return [4 /*yield*/, this.pergunta('Escolha uma opção: ')];
                    case 1:
                        opcao = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 12, , 13]);
                        _a = opcao;
                        switch (_a) {
                            case '1': return [3 /*break*/, 3];
                            case '2': return [3 /*break*/, 5];
                            case '3': return [3 /*break*/, 7];
                            case '4': return [3 /*break*/, 9];
                        }
                        return [3 /*break*/, 10];
                    case 3: return [4 /*yield*/, this.fazerLogin()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 5: return [4 /*yield*/, this.criarConta()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 7: return [4 /*yield*/, this.recuperarSenha()];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 9:
                        console.log('Até logo!');
                        this.rl.close();
                        return [2 /*return*/];
                    case 10:
                        console.log('Opção inválida!');
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        error_1 = _b.sent();
                        console.error('Erro:', error_1.message);
                        return [3 /*break*/, 13];
                    case 13: return [3 /*break*/, 0];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    MenuLogin.prototype.fazerLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var email, senha, perfil, menu;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pergunta('Email: ')];
                    case 1:
                        email = _a.sent();
                        return [4 /*yield*/, this.pergunta('Senha: ')];
                    case 2:
                        senha = _a.sent();
                        perfil = this.redeSocial.listarPerfis().find(function (p) { return p.autenticar(email, senha); });
                        if (!perfil) return [3 /*break*/, 4];
                        console.log("\nBem-vindo(a) de volta, ".concat(perfil.apelido, "!"));
                        menu = new Menu_1.Menu(this.redeSocial, perfil);
                        return [4 /*yield*/, menu.iniciar()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        console.log('Email ou senha incorretos!');
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MenuLogin.prototype.criarConta = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, apelido, email, senha, foto, perfil;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = Date.now().toString();
                        return [4 /*yield*/, this.pergunta('Nome de usuário: ')];
                    case 1:
                        apelido = _a.sent();
                        return [4 /*yield*/, this.pergunta('Email: ')];
                    case 2:
                        email = _a.sent();
                        return [4 /*yield*/, this.pergunta('Senha: ')];
                    case 3:
                        senha = _a.sent();
                        return [4 /*yield*/, this.pergunta('Foto (emoji): ')];
                    case 4:
                        foto = _a.sent();
                        try {
                            perfil = new Perfil_1.Perfil(id, apelido, foto, email, senha);
                            perfil.setRedeSocial(this.redeSocial);
                            this.redeSocial.adicionarPerfil(perfil);
                            console.log('Conta criada com sucesso!');
                        }
                        catch (error) {
                            console.error('Erro ao criar conta:', error.message);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuLogin.prototype.recuperarSenha = function () {
        return __awaiter(this, void 0, void 0, function () {
            var email, codigo, novaSenha;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pergunta('Digite seu email: ')];
                    case 1:
                        email = _a.sent();
                        console.log('Um código de recuperação foi enviado para seu email.');
                        return [4 /*yield*/, this.pergunta('Digite o código recebido: ')];
                    case 2:
                        codigo = _a.sent();
                        if (!(codigo === '123456')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.pergunta('Digite sua nova senha: ')];
                    case 3:
                        novaSenha = _a.sent();
                        console.log('Senha alterada com sucesso!');
                        return [3 /*break*/, 5];
                    case 4:
                        console.log('Código inválido!');
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MenuLogin.prototype.pergunta = function (pergunta) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.rl.question(pergunta, function (resposta) {
                resolve(resposta);
            });
        });
    };
    return MenuLogin;
}());
exports.MenuLogin = MenuLogin;
