"use strict";
exports.__esModule = true;
exports.ReadlineService = void 0;
var readlineSync = require("readline-sync");
var ReadlineService = /** @class */ (function () {
    function ReadlineService() {
    }
    ReadlineService.pergunta = function (pergunta) {
        return readlineSync.question(pergunta);
    };
    ReadlineService.close = function () {
        // Não é necessário fechar com readline-sync
    };
    return ReadlineService;
}());
exports.ReadlineService = ReadlineService;
