// Getters e Setters em Classes.

const _velocidade = Symbol('velocidade'); // Isso eh uma especie de numero aleatorio.
class Carro{
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof(valor) !== 'number') return; // Se tentar setar algo diferente numero ou
        if(valor >= 100 || valor <= 0) return; // numero maior que 100 ou menor que 0. Eh retornado sem modificar a velocidade.
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade]; // retorna a velocidade
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('fusca');


for(let i = 0; i <= 200; i++){
    c1.acelerar();
}

console.log(c1);
c1.velocidade = 87; // modificacao da velocidade atraves do setter
console.log(c1.velocidade); // visualizacao da velocidade atraves do getter