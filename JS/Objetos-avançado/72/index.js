// const pessoa = {
//     nome: 'Rafael',
//     sobrenome: 'Estevam'
// };
// const chave = 'nome'
// console.log(pessoa[chave])
// console.log(pessoa.sobrenome)

// delete pessoa1.nome

// const pessoa1 = new Object();
// pessoa1.nome =  'Rafael'
// pessoa1.sobrenome = 'Siqueira'
// pessoa1.idade = 20
// pessoa1.falarNome = function () {
//     return (`${this.nome} está falando seu nome`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade
// }

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave])
// }


// function criaPessoa(nome,sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Rafael', 'Estevam');
// console.log(p1.nomeCompleto())

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)
}

const p1 = new Pessoa('Rafael', 'Estevam');
// Object.freeze(p1)
// p1.fala = function() {console.log('oi')}
// p1.fala()
p1.nome = 'outra coisa';
console.log(p1);