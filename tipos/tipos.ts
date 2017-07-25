var nome: string = 'SMN';
var numero: number = 2;
var isTrue: boolean = false;
var lista: any[] = ['teste', 2];

function teste(): void {
    console.log('Teste');
}

teste();

enum EstadoCivil {Solteiro, Casado}

console.log(EstadoCivil.Solteiro);

var estadoDoSilvioSantos: EstadoCivil = EstadoCivil.Casado;