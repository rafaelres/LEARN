/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// function falaOI () {
//     return 'Oi';
// }
// const vaiExecutar = false;
// console.log(vaiExecutar && falaOI());

// console.log(0 || false || null || 'Rafael Estevam' || true)
const corUsuario = 'red';
const corPadrao = corUsuario || 'preto'
console.log(corPadrao)
