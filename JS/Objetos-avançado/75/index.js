/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

Object.keys (retorna as chaves)
Object.freeze (congela os objetos)
Object.defineProperties(define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// const caneca = {
//     ...produto,
//     material: 'porcelana'

// }

// const produto = { nome: 'Caneca', preco: 1.8};
// const caneca = Object.assign({}, produto, {material: 'porcelana'})

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;

// const produto = { nome: 'Produto', preco: 1.8};
// console.log(Object.values(produto))

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana'};

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}