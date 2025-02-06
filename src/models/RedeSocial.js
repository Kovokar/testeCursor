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
var CustomErrors_1 = require("../errors/CustomErrors");
var RedeSocial = /** @class */ (function () {
    function RedeSocial() {
        this._perfis = [];
        this._publicacoes = [];
        this._solicitacoesPendentes = new Map();
    }
    RedeSocial.prototype.adicionarPerfil = function (perfil) {
        if (this._perfis.some(function (p) { return p.email === perfil.email || p.id === perfil.id; })) {
            throw new CustomErrors_1.PerfilJaCadastradoError();
        }
        this._perfis.push(perfil);
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
    };
    RedeSocial.prototype.recusarSolicitacao = function (idSolicitante) {
        this._solicitacoesPendentes["delete"](idSolicitante);
    };
    return RedeSocial;
}());
exports.RedeSocial = RedeSocial;
