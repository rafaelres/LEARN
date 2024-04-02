// try {
//     console.log(naoExisto);
// } catch(err) {
//     console.log('naoExisto não existe');
//     console.log(err);
// }

function soma(x,y) {
    if (typeof x!== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser numeros')
    }

    return x + y
}

try{
    console.log(soma(1, 2))
    console.log(soma('1', 2))

} catch (error) {
    // console.log(error)
    console.log('Algo mais agradavel ao usuario')
}