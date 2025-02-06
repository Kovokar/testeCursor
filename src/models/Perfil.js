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
exports.Perfil = void 0;
var CustomErrors_1 = require("../errors/CustomErrors");
var Perfil = /** @class */ (function () {
    function Perfil(id, apelido, foto, email, senha) {
        this._id = id;
        this._apelido = apelido;
        this._foto = foto;
        this._email = email;
        this._senha = senha;
        this._status = true;
        this._amigos = [];
        this._postagens = [];
    }
    Perfil.prototype.autenticar = function (email, senha) {
        return this._email === email && this._senha === senha;
    };
    Perfil.prototype.adicionarAmigo = function (amigo) {
        if (this._amigos.includes(amigo)) {
            throw new CustomErrors_1.AmizadeJaExistenteError();
        }
        this._amigos.push(amigo);
    };
    Perfil.prototype.removerAmigo = function (amigo) {
        var index = this._amigos.indexOf(amigo);
        if (index > -1) {
            this._amigos.splice(index, 1);
        }
    };
    Perfil.prototype.adicionarPublicacao = function (publicacao) {
        if (!this._status) {
            throw new CustomErrors_1.PerfilInativoError();
        }
        this._postagens.push(publicacao);
    };
    Perfil.prototype.listarAmigos = function () {
        return __spreadArray([], this._amigos, true);
    };
    Perfil.prototype.listarPostagens = function () {
        return __spreadArray([], this._postagens, true);
    };
    Perfil.prototype.alterarStatus = function () {
        this._status = !this._status;
    };
    Object.defineProperty(Perfil.prototype, "id", {
        // Getters
        get: function () { return this._id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "apelido", {
        get: function () { return this._apelido; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "email", {
        get: function () { return this._email; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "status", {
        get: function () { return this._status; },
        enumerable: false,
        configurable: true
    });
    return Perfil;
}());
exports.Perfil = Perfil;
