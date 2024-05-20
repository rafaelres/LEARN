// Map
//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22 ,27];
const numerosEmDobro = numeros.map(valor => valor * 2)
// console.log(numerosEmDobro)

// Para cada elemnto:
// Retorne apenas uma string com o nome da pessoas
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em casa objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];
const nomes = pessoas.map(obj => obj.nome)
const idade = pessoas.map(obj => ({idade: obj.idade}))
const Ids = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})
console.log(Ids)
// console.log(nomes)
// console.log(idade)