// GETTERS & SETTERS
const _velocidade = Symbol('velocidade')
class Car {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade]
    }

    acelerate() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    brake() {
        if(this[_velocidade] <= 0) return
        this[_velocidade]--;
    }
}

const c1 = new Car('JettaGLI')

for(let i = 0; i<= 200; i++) {
    c1.acelerate()
}


c1.velocidade = 1651651
console.log(c1.velocidade)
