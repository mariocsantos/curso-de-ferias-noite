import {Cor} from '../class/cor';
import {Automovel} from './automovel-interface';

export class Carro implements Automovel {

    cor: Cor;

    constructor(public nome: string,
                public placa: string,
                public ano: number,
                private arCondicionado: boolean) { }

    public setCor(cor: Cor): void {
        this.cor = cor;
    }   

    public getCor(): string {
        return 'Cor do carro: ' + Cor[this.cor];
    }

    public getArCondicionado(): boolean {
        return this.arCondicionado;
    }
}

var fusca = new Carro('Fusca', 'AOE-1235', 1899, false);
console.log(fusca.getArCondicionado());