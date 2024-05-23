class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }
    
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando
    `)
}

const p1 = new Pessoa('Rafael', 'Estevam ')
const p2 = new Pessoa('Gabriel', 'Estevam ')
const p3 = new Pessoa('Erika', 'Estevam ')
const p4 = new Pessoa('Manuela', 'Estevam ')
console.log(p1)