"use strict";
exports.__esModule = true;
exports.Interacao = void 0;
var Interacao = /** @class */ (function () {
    function Interacao(_id, _tipo, _perfil) {
        this._id = _id;
        this._tipo = _tipo;
        this._perfil = _perfil;
    }
    Object.defineProperty(Interacao.prototype, "perfil", {
        get: function () {
            return this._perfil;
        },
        enumerable: false,
        configurable: true
    });
    return Interacao;
}());
exports.Interacao = Interacao;
