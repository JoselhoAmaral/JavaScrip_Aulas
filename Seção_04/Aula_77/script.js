// funcao constutora --> objetos
// funfabrica --> objetos
// funcao contrutora --> Comeca com letra maiuscula e a palavra new. Pessoa (new)
// funcao constutora nao utiliza "," mas sim ";". 

function Pessoa(nome, sobrenome){
    //metodos ou atributos  privados --> nao sao acesados fora da funcao construtora
    const ID = 123456;
    const metodoInterno = function(){};

    // metodos ou atributos publicos --> sao acessado fora da funcao construtora.
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Estudando JS.');
    };
}
const p1 = new Pessoa ('joselho', 'Amaral'); // A palavra new cria um objeto e aponta a palavra this que retorna o objeto.
const p2 = new Pessoa ('Maria', 'Silva');

console.log (p1.nome);
p2.metodo();