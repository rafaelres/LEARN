const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22 ,27]
const pares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor)
console.log(pares)