const nomes = ['rafael', 'gabriela', 'natan', 'danilo', 'sergio'];

// const removidos = nomes.splice(-2, Number.MAX_VALUE);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1)

// push
// nomes.splice(nomes.length, 0, 'otavio' )

// unshift
nomes.splice(2, 0, 'luiz', 'otavio')

console.log(nomes);
