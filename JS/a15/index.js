const nome = 'Rafael Estevam'
const alunos = ['Luiz', 'Maria', 'Rafael'];

console.log(typeof alunos)
console.log(alunos instanceof Array)

 alunos.push('Luiza')
 alunos.push('Eduardo')
 console.log(alunos.slice(0, -1))

 delete alunos[1] // remove indice, porém deixa com valor undefined
 console.log(alunos[1])

 const removido1 = alunos.shift() // remove indice do começo
 const removido2 = alunos.pop()//  remove indice do final
 console.log(removido1)
 console.log(removido2)

 alunos.unshift('Luiza') // Adiciona ao inicio
 alunos.unshift('Fabio')

 alunos.push('Luiza') // Adiciona ao fim
 alunos.push('Fabio')

 alunos[alunos.length] = 'Luiza' // Adiciona ao fim
 alunos[alunos.length] = 'Fábio'
 alunos[alunos.length] = 'Danilo'

 alunos[0] = 'Eduardo' // Altera
 alunos[3] = 'Natan' // Adiciona

 console.log(alunos[0])
 console.log(alunos[2])

