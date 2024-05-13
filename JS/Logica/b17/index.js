// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nome = ['Rafael Estevam', 'Gabriela Traszi', 'Natan Hasman'];
const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Estevam',
    idade: 19
}

for (let i in pessoa) {
    console.log(i, pessoa[i])
}

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

for ( let i in nome ) {
    console.log(nome[i])
}

for (let valor of nome) {
    console.log(valor)
}

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});