function teste() {  
    console.log('teste')
}

class Controller {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste()
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }
    
    //Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar')
    }
}

const controle1 = new Controller('Samsung')
