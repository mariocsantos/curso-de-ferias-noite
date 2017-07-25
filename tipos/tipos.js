var nome = 'SMN';
var numero = 2;
var isTrue = false;
var lista = ['teste', 2];
function teste() {
    console.log('Teste');
}
teste();
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["Solteiro"] = 0] = "Solteiro";
    EstadoCivil[EstadoCivil["Casado"] = 1] = "Casado";
})(EstadoCivil || (EstadoCivil = {}));
console.log(EstadoCivil.Solteiro);
