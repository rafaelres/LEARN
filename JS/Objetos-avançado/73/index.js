//defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false // como false nao permite a alteração do valor da chave
    });

    Object.defineProperties(this, {
        nome : {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false},
            
        preco : {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false},

        estoque : {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false}
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))


for(let chave in p1) {
    console.log(chave)
}