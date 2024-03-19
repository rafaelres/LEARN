// let a = 'A'
// let b = 'B'
// let c = 'C'

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// const [um, , tres, , cinco, , sete] = numeros
// console.log(um, tres, cinco)

//                   0          1          2
//                0  1  2    0  1  2    0  1  2 
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [ls1, ls2, ls3] = numeros
console.log(ls3[2])