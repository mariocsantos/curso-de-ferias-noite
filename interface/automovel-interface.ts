import {Cor} from '../class/cor';

export interface Automovel {
    nome: string;
    placa: string;
    ano: number;
    cor?: Cor

    getCor(): string;
}