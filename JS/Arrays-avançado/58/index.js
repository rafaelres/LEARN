const nomes = new Array('rafael', 'natan', 'gabriela')
const nomes = ['rafael', 'gabriela', 'natan', 'danilo', 'sergio'];
nomes[2] = 'pedro';
delete nomes[2];
const removido = nomes.pop()
const removido2 = nomes.shift()
nomes.unshift('danilo');
nomes.unshift('sergio');
const novo = nomes.slice(1,-1)
console.log(novo);

const nome = 'Rafael Estevam Siqueira';
const nomes = nome.split(' ')
const nome = ['Rafael', 'Estevam', 'Siqueira']
const nomes = nome.join(' ')
console.log(nomes)
