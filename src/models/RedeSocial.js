"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.RedeSocial = void 0;
var Perfil_1 = require("./Perfil");
var Publicacao_1 = require("./Publicacao");
var PublicacaoAvancada_1 = require("./PublicacaoAvancada");
var CustomErrors_1 = require("../errors/CustomErrors");
var DataManager_1 = require("../data/DataManager");
var RedeSocial = /** @class */ (function () {
    function RedeSocial() {
        this._perfis = [];
        this._publicacoes = [];
        this._solicitacoesPendentes = new Map();
        this.carregarDados();
    }
    RedeSocial.prototype.carregarDados = function () {
        var _this = this;
        var dados = DataManager_1.DataManager.carregarDados();
        if (dados) {
            // Carregar perfis
            dados.perfis.forEach(function (perfilData) {
                var perfil = new Perfil_1.Perfil(perfilData.id, perfilData.apelido, perfilData.foto, perfilData.email, perfilData.senha);
                _this._perfis.push(perfil);
            });
            // Carregar amizades
            dados.perfis.forEach(function (perfilData) {
                var perfil = _this.buscarPerfil(perfilData.id);
                if (perfil) {
                    perfilData.amigos.forEach(function (amigoId) {
                        var amigo = _this.buscarPerfil(amigoId);
                        if (amigo) {
                            try {
                                perfil.adicionarAmigo(amigo);
                            }
                            catch (error) {
                                // Ignora amizades duplicadas
                            }
                        }
                    });
                }
            });
            // Carregar solicitações pendentes
            dados.solicitacoesPendentes.forEach(function (_a) {
                var idSolicitante = _a[0], idSolicitado = _a[1];
                _this._solicitacoesPendentes.set(idSolicitante, idSolicitado);
            });
            // Carregar publicações
            dados.perfis.forEach(function (perfilData) {
                var perfil = _this.buscarPerfil(perfilData.id);
                if (perfil) {
                    perfilData.postagens.forEach(function (pubData) {
                        var Classe = pubData.tipo === 'avancada' ? PublicacaoAvancada_1.PublicacaoAvancada : Publicacao_1.Publicacao;
                        var publicacao = new Classe(pubData.id, pubData.conteudo, perfil);
                        perfil.adicionarPublicacao(publicacao);
                    });
                }
            });
        }
    };
    RedeSocial.prototype.salvarDados = function () {
        DataManager_1.DataManager.salvarDados(this._perfis, this._solicitacoesPendentes);
    };
    RedeSocial.prototype.adicionarPerfil = function (perfil) {
        if (this._perfis.some(function (p) { return p.email === perfil.email || p.id === perfil.id; })) {
            throw new CustomErrors_1.PerfilJaCadastradoError();
        }
        this._perfis.push(perfil);
        this.salvarDados();
    };
    RedeSocial.prototype.adicionarPublicacao = function (publicacao) {
        this._publicacoes.push(publicacao);
        this.salvarDados();
    };
    RedeSocial.prototype.buscarPerfil = function (identificador) {
        return this._perfis.find(function (p) {
            return p.id === identificador ||
                p.email === identificador ||
                p.apelido === identificador;
        });
    };
    RedeSocial.prototype.listarPerfis = function () {
        return __spreadArray([], this._perfis, true);
    };
    RedeSocial.prototype.enviarSolicitacaoAmizade = function (idSolicitante, idSolicitado) {
        var solicitante = this.buscarPerfil(idSolicitante);
        var solicitado = this.buscarPerfil(idSolicitado);
        if (!solicitante || !solicitado) {
            throw new CustomErrors_1.ValorInvalidoException('Perfil não encontrado');
        }
        this._solicitacoesPendentes.set(idSolicitante, idSolicitado);
        this.salvarDados();
    };
    RedeSocial.prototype.aceitarSolicitacao = function (idSolicitante, idSolicitado) {
        var solicitante = this.buscarPerfil(idSolicitante);
        var solicitado = this.buscarPerfil(idSolicitado);
        if (!solicitante || !solicitado) {
            throw new CustomErrors_1.ValorInvalidoException('Perfil não encontrado');
        }
        solicitante.adicionarAmigo(solicitado);
        solicitado.adicionarAmigo(solicitante);
        this._solicitacoesPendentes["delete"](idSolicitante);
        this.salvarDados();
    };
    RedeSocial.prototype.recusarSolicitacao = function (idSolicitante) {
        this._solicitacoesPendentes["delete"](idSolicitante);
        this.salvarDados();
    };
    RedeSocial.prototype.listarSolicitacoesPendentes = function (idSolicitado) {
        var _this = this;
        var solicitacoes = [];
        this._solicitacoesPendentes.forEach(function (idDestino, idOrigem) {
            console.log(idDestino, idOrigem);
            console.log(idSolicitado);
            if (idDestino === idSolicitado) {
                var solicitante = _this.buscarPerfil(idOrigem);
                if (solicitante) {
                    solicitacoes.push(solicitante);
                }
            }
        });
        return solicitacoes;
    };
    return RedeSocial;
}());
exports.RedeSocial = RedeSocial;
