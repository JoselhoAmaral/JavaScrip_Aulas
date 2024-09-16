// Metodos de instancia e estaticos.

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // metodos de instancia - Metodo das instancias.
    aumentarVolume() {
        if (this.volume >= 100) return;
        this.volume += 2;
    }

    diminuirVolume() {
        if (this.volume <= 0) return;
        this.volume -= 2;
    }

    // metodo estatico - Metodo da classe.
    static trocaPilha(){ // Essa funcao pode receber parametros (valores).
        console.log('Pilha trocada!');
    } // OBS.: Esse metodo nao tem acesso as variaveis tv e volume.
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha(); // Um metodo estatico eh referente a classe. Ou seja, modifica em todos as instancias filhas de ControleRemoto.