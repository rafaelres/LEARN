/*   Primitivos (imutáveis) - string, number, boolean, undefined,
 null (bigint, symbol) - Valor.

    Referência (mutável) - array, object, function

*/

const a = {
    nome: 'Rafael',
    sobrenome: 'Estevam'
};

const b = {...a}

a.nome= 'Gabriel'
console.log(b)





// let a = [1, 2, 3];
// let b = [...a];
// let c = b
// console.log(a, b)

// a.push(4);
// console.log(a,b)

// b.pop()
// console.log(a, b)

// a.push('Luiz')
// console.log(c)

// let a = 'A';
// let b = a // Cópia
// console.log(a, b)

// a = 'Outra coisa'
// console.log(a, b)

// let nome = 'Rafael';
// console.log(nome[0])