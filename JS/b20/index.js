const numeros = [1,2,3,4,5,6,7,8,9];

while (i < numeros.length) {
    let numero = numeros[i]
    if(numero === 2 ){
        console.log('pulei o numero 2')
        i++;
        continue; // pula para proxima iteração do laço
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        i++;
        break; // encerra o laço
    }

    i++;
}

do {
    let numero = numeros[i]
    if(numero === 2 ){
        console.log('pulei o numero 2')
        i++;
        continue; // pula para proxima interação do laço
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        i++;
        break; // encerra o laço
    }

    i++;
} while (i < numeros.length)