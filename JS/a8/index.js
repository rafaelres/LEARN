 let contador = 1
 console.log(contador++)
 console.log(contador)
 console.log(++contador)

let contador2 = 10
console.log(--contador2)

//  MAIS CORRETO
 let contador1 = 1
 contador1 ++;
 console.log(contador1)


// INCREMENTO DE MAIS DE UM VALOR
const passo = 2
let contador3 = 0
 contador3 = contador3 + passo
console.log(contador3)
contador3 = contador3 + passo
console.log(contador3)
contador3 = contador3 + passo
console.log(contador3)

const passo2 = 50;
let contador4 = 0
contador4 += passo
console.log(contador4)

let contador5 = 2
contador5 *= 2;
contador5 *= 2;
contador5 *= 2;
console.log(contador5)

const num3 = 10
const num4 = parseInt('5')
const num5 = parseFloat('5,2')
console.log(num3 + num4 + num5)
console.log(typeof num3, typeof num5)