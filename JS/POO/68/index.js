class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi
    }

    ligar() {
        console.log('Olha, você alterou o método ligar')
    }

    falaOI() {
        console.log('Oi')
    }
}

const s1 = new Smartphone('Iphone', 'Preto', '13');
console.log(s1)

const t1 = new Tablet('IPad', true)
t1.ligar()
t1.falaOI()
