/*
Rafael Estevam tem 19 anos, pesa 105 kg
tem 1.8 de altura e seu IMC é de 33,51527338887293
Rafael nasceu em 2004.
*/

const nome = 'Rafael';
const sobrenome = 'Estevam';
const idade = 19;
const peso = 105;
const altura = 1.77;
const anoAtual = 2024;
let imc;
let anoNascimento;

anoNascimento = anoAtual - idade
imc = peso / (altura * altura)

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento +'.')

//template strings


