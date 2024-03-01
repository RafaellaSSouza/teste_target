const input = require('readline-sync')

var string = input.question('Digite uma palavra ou frase:');

function inverteString(str) {
    var novaString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    console.log(novaString)
    return novaString;
}

inverteString(string);

