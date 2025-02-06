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
exports.__esModule = true;
exports.ValorInvalidoException = exports.AmizadeJaExistenteError = exports.InteracaoDuplicadaError = exports.PerfilInativoError = exports.PerfilNaoAutorizadoError = exports.PerfilJaCadastradoError = void 0;
var PerfilJaCadastradoError = /** @class */ (function (_super) {
    __extends(PerfilJaCadastradoError, _super);
    function PerfilJaCadastradoError() {
        var _this = _super.call(this, 'Perfil já cadastrado') || this;
        _this.name = 'PerfilJaCadastradoError';
        return _this;
    }
    return PerfilJaCadastradoError;
}(Error));
exports.PerfilJaCadastradoError = PerfilJaCadastradoError;
var PerfilNaoAutorizadoError = /** @class */ (function (_super) {
    __extends(PerfilNaoAutorizadoError, _super);
    function PerfilNaoAutorizadoError() {
        var _this = _super.call(this, 'Perfil não autorizado para esta operação') || this;
        _this.name = 'PerfilNaoAutorizadoError';
        return _this;
    }
    return PerfilNaoAutorizadoError;
}(Error));
exports.PerfilNaoAutorizadoError = PerfilNaoAutorizadoError;
var PerfilInativoError = /** @class */ (function (_super) {
    __extends(PerfilInativoError, _super);
    function PerfilInativoError() {
        var _this = _super.call(this, 'Perfil está inativo') || this;
        _this.name = 'PerfilInativoError';
        return _this;
    }
    return PerfilInativoError;
}(Error));
exports.PerfilInativoError = PerfilInativoError;
var InteracaoDuplicadaError = /** @class */ (function (_super) {
    __extends(InteracaoDuplicadaError, _super);
    function InteracaoDuplicadaError() {
        var _this = _super.call(this, 'Interação já existe') || this;
        _this.name = 'InteracaoDuplicadaError';
        return _this;
    }
    return InteracaoDuplicadaError;
}(Error));
exports.InteracaoDuplicadaError = InteracaoDuplicadaError;
var AmizadeJaExistenteError = /** @class */ (function (_super) {
    __extends(AmizadeJaExistenteError, _super);
    function AmizadeJaExistenteError() {
        var _this = _super.call(this, 'Amizade já existe') || this;
        _this.name = 'AmizadeJaExistenteError';
        return _this;
    }
    return AmizadeJaExistenteError;
}(Error));
exports.AmizadeJaExistenteError = AmizadeJaExistenteError;
var ValorInvalidoException = /** @class */ (function (_super) {
    __extends(ValorInvalidoException, _super);
    function ValorInvalidoException(mensagem) {
        var _this = _super.call(this, mensagem) || this;
        _this.name = 'ValorInvalidoException';
        return _this;
    }
    return ValorInvalidoException;
}(Error));
exports.ValorInvalidoException = ValorInvalidoException;
