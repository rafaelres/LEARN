function createPerson(name, lastName) {
    return { name, lastName};
};

const p1 = createPerson('Rafael', 'Siqueira')
const p2 = {
    name: 'Danilo',
    lastName: 'Keller'
};

console.log(p1)
console.log(p2)

function speakFrase(start) {
    function speakRest(rest){
        return start + ' ' + rest
    }
    return speakRest
}

const speak = speakFrase('Hello')
const rest = speak('world!');
console.log(rest)

function createMultiplier(multiplier) {
    return function(n) {
        return n * multiplier
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(2))
console.log(triple(2))
console.log(quadruple(2))