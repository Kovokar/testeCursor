"use strict";
exports.__esModule = true;
exports.Publicacao = void 0;
var Publicacao = /** @class */ (function () {
    function Publicacao(id, conteudo, perfil) {
        this._id = id;
        this._conteudo = conteudo;
        this._dataHora = new Date();
        this._perfil = perfil;
    }
    Object.defineProperty(Publicacao.prototype, "id", {
        // Getters
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Publicacao.prototype, "conteudo", {
        get: function () { return this._conteudo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Publicacao.prototype, "dataHora", {
        get: function () { return this._dataHora; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Publicacao.prototype, "perfil", {
        get: function () { return this._perfil; },
        enumerable: false,
        configurable: true
    });
    return Publicacao;
}());
exports.Publicacao = Publicacao;
