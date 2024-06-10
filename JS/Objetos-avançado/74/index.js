// defineProperty -> Getters e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable:true,
        configurable: true,
        get: function() {
            return estoquePrivado
        },
        set: function(valor) {
         if (typeof valor !== 'number'){
            throw new TypeError('Error -> not a number')
         }
        }
    });
}

function criaProduto(nome) {
    return{
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace('grande.', '')
            nome = valor
        }
    }
}
 
// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 'valor que eu quero'
// console.log(p1.estoque)

const p2 = criaProduto('Camiseta')
p2.nome = 'Regata grande.'
console.log(p2.nome)