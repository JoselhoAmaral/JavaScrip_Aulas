// Heranca com classes

class DispositivoEletronico {
    constructor (nome) {
        this.nome  = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado.`)
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado.`)
            return;
        }
        this.ligado = false;
    }
}

// aqui crio uma classe e passo tudo da classe DispositivoEletronico para ela atraves do comando extends. --> Heranca
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome); //comando para pegar o atibuto nome da classe DispositivoEletronico
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, wifi) {
        super(nome);
        this.wifi = wifi;
    }

    // Aqui estamos criando novos metodos que so estao presente nessa subclasse Tablet.
    ligaWifi() {
        if(this.wifi){
            console.log('Wifi já ligado.');
            return;
        }
        this.wifi = true;
    }

    desligaWifi() {
        if(!this.wifi){
            console.log('Wifi já desligado.');
            return;
        }
        this.wifi = false;
    }

    // Aqui podemos alterar os metodos passados pela heranca.
    ligar() {
        console.log('Método ligar() alterado.')
    }
}


// Criacao de objetos
const d1 = new DispositivoEletronico('smartphone');
d1.ligar();
d1.ligar();
console.log(d1);
d1.desligar();
d1.desligar();
console.log(d1);

console.log('----------------------------------------');
const s1 = new Smartphone('Samsung','Prata','S10');

s1.ligar();
s1.ligar();
console.log(s1);

console.log('----------------------------------------');
const t1 = new Tablet('Ipad', false);
t1.ligar();
console.log(t1);
t1.ligaWifi();
console.log(t1);