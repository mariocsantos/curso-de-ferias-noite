"use strict";
exports.__esModule = true;
var cor_1 = require("../class/cor");
var Carro = (function () {
    function Carro(nome, placa, ano, arCondicionado) {
        this.nome = nome;
        this.placa = placa;
        this.ano = ano;
        this.arCondicionado = arCondicionado;
    }
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    Carro.prototype.getCor = function () {
        return 'Cor do carro: ' + cor_1.Cor[this.cor];
    };
    return Carro;
}());
exports.Carro = Carro;
var fusca = new Carro('Fusca', 'AOE-1235', 1899, false);
console.log(fusca.nome);
