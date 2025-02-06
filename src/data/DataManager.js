"use strict";
exports.__esModule = true;
exports.DataManager = void 0;
var fs = require("fs");
var PublicacaoAvancada_1 = require("../models/PublicacaoAvancada");
var DataManager = /** @class */ (function () {
    function DataManager() {
    }
    DataManager.salvarDados = function (perfis, solicitacoesPendentes) {
        var dados = {
            perfis: perfis.map(function (p) { return ({
                id: p.id,
                apelido: p.apelido,
                foto: p.foto,
                email: p.email,
                senha: p['_senha'],
                status: p.status,
                amigos: p.listarAmigos().map(function (a) { return a.id; }),
                postagens: p.listarPostagens().map(function (pub) { return ({
                    id: pub.id,
                    conteudo: pub.conteudo,
                    dataHora: pub.dataHora.toISOString(),
                    perfilId: pub.perfil.id,
                    tipo: pub instanceof PublicacaoAvancada_1.PublicacaoAvancada ? 'avancada' : 'normal',
                    interacoes: pub instanceof PublicacaoAvancada_1.PublicacaoAvancada ?
                        pub.listarInteracoes().map(function (i) { return ({
                            id: i['_id'],
                            tipo: i['_tipo'],
                            perfilId: i.perfil.id
                        }); }) : undefined
                }); })
            }); }),
            solicitacoesPendentes: Array.from(solicitacoesPendentes.entries())
        };
        fs.writeFileSync(this.ARQUIVO_DADOS, JSON.stringify(dados, null, 2));
    };
    DataManager.carregarDados = function () {
        try {
            if (fs.existsSync(this.ARQUIVO_DADOS)) {
                var dados = JSON.parse(fs.readFileSync(this.ARQUIVO_DADOS, 'utf-8'));
                return dados;
            }
        }
        catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
        return null;
    };
    DataManager.ARQUIVO_DADOS = 'dados_rede_social.json';
    return DataManager;
}());
exports.DataManager = DataManager;
