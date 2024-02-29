const input = require('readline-sync')
function calculaFibonacci () {
    var a = 0;
    var b = 1;
    var c = 0;
    var mostraFibonacci = a + " " + b;
    
    for(var cont = 1; cont <= 10; cont ++) {
        c = a + b;
        a = b;
        b = c;
        mostraFibonacci += " " + c;
    }

    return mostraFibonacci;
}

var seq = calculaFibonacci();
var lista = seq.split(' ')

var numero = input.question('Digite um numero (de 0 a 100):');

var pertence = lista.includes(numero)

console.log(lista)

if (pertence == true) {
    console.log('Este numero PERTENCE a sequencia de Fibonacci.')
} else {
    console.log('Este numero NAO PERTENCE a sequencia de Fibonacci.')
}




