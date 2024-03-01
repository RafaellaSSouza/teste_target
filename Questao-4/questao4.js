var estados = [
    {estado: 'SP', valor: 67836.43},
    {estado: 'RJ', valor: 36678.66},
    {estado: 'MG', valor: 29229.88},
    {estado: 'ES', valor: 27165.48},
    {estado: 'outros', valor: 19849.53},
]

var somaValores = estados.reduce((a, b) => a + b.valor, 0)

for(var i = 0; i < estados.length; i++) {
     var perc = (estados[i].valor / somaValores) * 100;
     console.log(estados[i].estado + ' = ' + perc.toFixed(2) + '%')
}