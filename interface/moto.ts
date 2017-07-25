import {Cor} from '../class/cor';
import {Automovel} from './automovel-interface';

export class Moto implements Automovel {

    constructor(public nome: string,
                public placa: string,
                public ano: number,
                public mata: boolean,
                public cor: Cor) { }

    getCor(): string {
        return 'Cor da moto: ' + Cor[this.cor];
    }
}