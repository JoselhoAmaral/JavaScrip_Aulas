//Factory Functions + Prototypes

/* // Primeira forma de fazer
function criaPessoa (nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando`);
        },
        beber() {
            console.log(`${this.nome} está bebendo`);
        },
        comer() {
            console.log(`${this.nome} está comendo`);
        },
    };
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}
*/

// Segunda maneira de fazer lancando os metodos como constantes.
const falar = {falar() {console.log(`${this.nome} está falando`);}};
const beber = {beber() {console.log(`${this.nome} está bebendo`);}};
const comer = {comer() {console.log(`${this.nome} está comendo`);}};

// const pessoaPrototype = {...falar, ...beber, ...comer}; // Aqui passo as funcoes pelo rest operator.
const pessoaPrototype = Object.assign({}, falar, beber, comer); //Ou posso utilizar o comando Object.assign().

function criaPessoa (nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}


const p1 = criaPessoa ('Joselho', 'Amaral');
console.log(p1);
p1.falar();
p1.beber();
p1.comer();