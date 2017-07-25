"use strict";
exports.__esModule = true;
var cor_1 = require("./cor");
var Automovel = (function () {
    function Automovel(nome, ano, placa, cor) {
        this.nome = nome;
        this.ano = ano;
        this.placa = placa;
        this.cor = cor;
    }
    Automovel.prototype.getCor = function () {
        console.log('Cor do automovel: ' + cor_1.Cor[this.cor]);
    };
    return Automovel;
}());
var fusca = new Automovel('Fusca', 1989, 'MAO-1234', cor_1.Cor.Branca);
console.log(fusca);
fusca.getCor();
