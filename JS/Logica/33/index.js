const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Estevam',
    idade: 19,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {
     nome, 
     endereco: {rua: r = 12345, numero },
     endereco,
     ...resto 
} = pessoa;
console.log(nome, r, numero, endereco, resto);