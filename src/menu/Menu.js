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
exports.Menu = void 0;
var Publicacao_1 = require("../models/Publicacao");
var PublicacaoAvancada_1 = require("../models/PublicacaoAvancada");
var ReadlineService_1 = require("../utils/ReadlineService");
var Menu = /** @class */ (function () {
    function Menu(redeSocial, perfilLogado) {
        this.redeSocial = redeSocial;
        this.perfilLogado = perfilLogado;
    }
    Menu.prototype.iniciar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var opcao, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 13];
                        console.log('\n=== Menu Principal ===');
                        console.log('1. Gerenciar Perfis');
                        console.log('2. Gerenciar Publicações');
                        console.log('3. Gerenciar Amizades');
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
                    case 2: return [4 /*yield*/, this.menuPerfis()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 4: return [4 /*yield*/, this.menuPublicacoes()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 6: return [4 /*yield*/, this.menuAmizades()];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 8: return [2 /*return*/];
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
    Menu.prototype.menuPerfis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var opcao, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('\n=== Gerenciar Perfis ===');
                        console.log('1. Listar perfis');
                        console.log('2. Buscar perfil');
                        console.log('3. Voltar');
                        opcao = this.pergunta('Escolha uma opção: ');
                        _a = opcao;
                        switch (_a) {
                            case '1': return [3 /*break*/, 1];
                            case '2': return [3 /*break*/, 2];
                            case '3': return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        this.listarPerfis();
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.buscarPerfil()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [2 /*return*/];
                    case 5:
                        console.log('Opção inválida!');
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.menuPublicacoes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var opcao, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('\n=== Gerenciar Publicações ===');
                        console.log('1. Criar publicação');
                        console.log('2. Listar publicações');
                        console.log('3. Criar publicação avançada');
                        console.log('4. Voltar');
                        opcao = this.pergunta('Escolha uma opção: ');
                        _a = opcao;
                        switch (_a) {
                            case '1': return [3 /*break*/, 1];
                            case '2': return [3 /*break*/, 3];
                            case '3': return [3 /*break*/, 4];
                            case '4': return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.criarPublicacao()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 3:
                        this.listarPublicacoes();
                        return [3 /*break*/, 8];
                    case 4: return [4 /*yield*/, this.criarPublicacaoAvancada()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 6: return [2 /*return*/];
                    case 7:
                        console.log('Opção inválida!');
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.menuAmizades = function () {
        return __awaiter(this, void 0, void 0, function () {
            var opcao, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('\n=== Gerenciar Amizades ===');
                        console.log('1. Enviar solicitação');
                        console.log('2. Aceitar solicitação');
                        console.log('3. Recusar solicitação');
                        console.log('4. Listar solicitações');
                        console.log('5. Voltar');
                        opcao = this.pergunta('Escolha uma opção: ');
                        _a = opcao;
                        switch (_a) {
                            case '1': return [3 /*break*/, 1];
                            case '2': return [3 /*break*/, 3];
                            case '3': return [3 /*break*/, 5];
                            case '4': return [3 /*break*/, 7];
                            case '5': return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 9];
                    case 1: return [4 /*yield*/, this.enviarSolicitacao()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 3: return [4 /*yield*/, this.aceitarSolicitacao()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 5: return [4 /*yield*/, this.recusarSolicitacao()];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 7:
                        this.listarSolicitacoes();
                        return [3 /*break*/, 10];
                    case 8: return [2 /*return*/];
                    case 9:
                        console.log('Opção inválida!');
                        _b.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.pergunta = function (pergunta) {
        return ReadlineService_1.ReadlineService.pergunta(pergunta);
    };
    Menu.prototype.listarPerfis = function () {
        var perfis = this.redeSocial.listarPerfis();
        console.log('\nPerfis cadastrados:');
        perfis.forEach(function (p) { return console.log("ID: ".concat(p.id, ", Apelido: ").concat(p.apelido, ", Email: ").concat(p.email)); });
    };
    Menu.prototype.buscarPerfil = function () {
        return __awaiter(this, void 0, void 0, function () {
            var identificador, perfil;
            return __generator(this, function (_a) {
                identificador = this.pergunta('Digite o ID, email ou apelido do perfil: ');
                perfil = this.redeSocial.buscarPerfil(identificador);
                if (perfil) {
                    console.log("\nPerfil encontrado:\nID: ".concat(perfil.id, "\nApelido: ").concat(perfil.apelido, "\nEmail: ").concat(perfil.email));
                }
                else {
                    console.log('Perfil não encontrado.');
                }
                return [2 /*return*/];
            });
        });
    };
    Menu.prototype.enviarSolicitacao = function () {
        return __awaiter(this, void 0, void 0, function () {
            var idSolicitado;
            return __generator(this, function (_a) {
                idSolicitado = this.pergunta('Digite o ID, email ou apelido do perfil que deseja adicionar: ');
                try {
                    this.redeSocial.enviarSolicitacaoAmizade(this.perfilLogado.id, idSolicitado);
                    console.log('Solicitação enviada com sucesso!');
                }
                catch (error) {
                    console.error('Erro ao enviar solicitação:', error.message);
                }
                return [2 /*return*/];
            });
        });
    };
    Menu.prototype.aceitarSolicitacao = function () {
        return __awaiter(this, void 0, void 0, function () {
            var idSolicitante;
            return __generator(this, function (_a) {
                idSolicitante = this.pergunta('Digite o ID, email ou apelido de quem enviou a solicitação: ');
                try {
                    this.redeSocial.aceitarSolicitacao(idSolicitante, this.perfilLogado.id);
                    console.log('Solicitação aceita com sucesso!');
                }
                catch (error) {
                    console.error('Erro ao aceitar solicitação:', error.message);
                }
                return [2 /*return*/];
            });
        });
    };
    Menu.prototype.recusarSolicitacao = function () {
        return __awaiter(this, void 0, void 0, function () {
            var idSolicitante;
            return __generator(this, function (_a) {
                idSolicitante = this.pergunta('Digite o ID de quem enviou a solicitação: ');
                try {
                    this.redeSocial.recusarSolicitacao(idSolicitante);
                    console.log('Solicitação recusada com sucesso!');
                }
                catch (error) {
                    console.error('Erro ao recusar solicitação:', error.message);
                }
                return [2 /*return*/];
            });
        });
    };
    Menu.prototype.criarPublicacao = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conteudo, id, publicacao;
            return __generator(this, function (_a) {
                conteudo = this.pergunta('Digite o conteúdo da publicação: ');
                id = Date.now().toString();
                try {
                    publicacao = new Publicacao_1.Publicacao(id, conteudo, this.perfilLogado);
                    this.perfilLogado.adicionarPublicacao(publicacao);
                    console.log('Publicação criada com sucesso!');
                }
                catch (error) {
                    console.error('Erro ao criar publicação:', error.message);
                }
                return [2 /*return*/];
            });
        });
    };
    Menu.prototype.criarPublicacaoAvancada = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conteudo, id, publicacao;
            return __generator(this, function (_a) {
                conteudo = this.pergunta('Digite o conteúdo da publicação: ');
                id = Date.now().toString();
                try {
                    publicacao = new PublicacaoAvancada_1.PublicacaoAvancada(id, conteudo, this.perfilLogado);
                    this.perfilLogado.adicionarPublicacao(publicacao);
                    console.log('Publicação avançada criada com sucesso!');
                }
                catch (error) {
                    console.error('Erro ao criar publicação avançada:', error.message);
                }
                return [2 /*return*/];
            });
        });
    };
    Menu.prototype.listarPublicacoes = function () {
        var perfis = this.redeSocial.listarPerfis();
        console.log('\nPublicações:');
        perfis.forEach(function (perfil) {
            var publicacoes = perfil.listarPostagens();
            publicacoes.forEach(function (pub) {
                console.log("\n".concat(perfil.apelido, " publicou: ").concat(pub.conteudo));
                console.log("Data: ".concat(pub.dataHora.toLocaleString()));
                if (pub instanceof PublicacaoAvancada_1.PublicacaoAvancada) {
                    var interacoes = pub.listarInteracoes();
                    if (interacoes.length > 0) {
                        console.log('Interações:', interacoes.length);
                    }
                }
                console.log('-------------------');
            });
        });
    };
    Menu.prototype.listarSolicitacoes = function () {
        var solicitacoes = this.redeSocial.listarSolicitacoesPendentes(this.perfilLogado.id);
        if (solicitacoes.length === 0) {
            console.log('\nNenhuma solicitação de amizade pendente.');
            return;
        }
        console.log('\nSolicitações de amizade pendentes:');
        solicitacoes.forEach(function (solicitante) {
            console.log("".concat(solicitante.apelido, " te enviou uma solicita\u00E7\u00E3o de amizade"));
        });
    };
    return Menu;
}());
exports.Menu = Menu;
