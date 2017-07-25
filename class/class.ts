import {Cor} from './cor';

class Automovel {

    constructor(public nome: string, 
                public ano: number, 
                public placa: string, 
                public cor: Cor) {

    }

    getCor() {
        console.log('Cor do automovel: ' + Cor[this.cor])
    }
}

var fusca = new Automovel('Fusca', 1989, 'MAO-1234', Cor.Branca);
console.log(fusca);
fusca.getCor();