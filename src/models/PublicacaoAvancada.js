"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.PublicacaoAvancada = void 0;
var Publicacao_1 = require("./Publicacao");
var CustomErrors_1 = require("../errors/CustomErrors");
var PublicacaoAvancada = /** @class */ (function (_super) {
    __extends(PublicacaoAvancada, _super);
    function PublicacaoAvancada(id, conteudo, perfil) {
        var _this = _super.call(this, id, conteudo, perfil) || this;
        _this._interacoes = [];
        return _this;
    }
    PublicacaoAvancada.prototype.adicionarInteracao = function (interacao) {
        if (this._interacoes.some(function (i) { return i.perfil.id === interacao.perfil.id; })) {
            throw new CustomErrors_1.InteracaoDuplicadaError();
        }
        this._interacoes.push(interacao);
    };
    PublicacaoAvancada.prototype.listarInteracoes = function () {
        return __spreadArray([], this._interacoes, true);
    };
    return PublicacaoAvancada;
}(Publicacao_1.Publicacao));
exports.PublicacaoAvancada = PublicacaoAvancada;
