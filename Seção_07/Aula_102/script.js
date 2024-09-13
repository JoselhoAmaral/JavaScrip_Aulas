// Criando Classes
// Em classe a parte de herança é mais forte e simplificada, pois os metodos
// cirados dentro da classe ja vao para o prototype.

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // Esses metodos vao para o prototype de maneira automatica em classes
        console.log(`${this.nome} está falando sobre JS.`);
    }
    comer() {
        console.log(`${this.nome} está comento frutas.`);
    }
    beber() {
        console.log(`${this.nome} está bebendo suco.`);
    }
}

const p1 = new Pessoa('Joselho', 'Amaral');
const p2 = new Pessoa('João', 'Silva');
console.log(p1);

p1.falar();
p1.comer();
p1.beber();
p2.comer();