const json = require('./faturamento.json');

var arrValores = [];

for(var i = 0; i < json.length; i++) {
    arrValores.push(json[i].valor)
  }

var zeros = 0;
var indice = arrValores.indexOf(zeros);
while(indice >= 0){
    arrValores.splice(indice, 1);
    indice = arrValores.indexOf(zeros);
}

var maiorValor = Math.max(...arrValores)
var menorValor = Math.min(...arrValores)

var soma = 0;
for (var i = 0; i < arrValores.length; i++) {
  soma += arrValores[i];
}
const media = soma / arrValores.length;

var dias = 0;
for(cont = 0; cont < arrValores.length; cont++) {
    if(arrValores[cont] > media) {
        dias = dias + 1
    }
}

console.log("O maior valor é:", maiorValor)
console.log("O menor valor é:", menorValor)
console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal:" ,dias)
