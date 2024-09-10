// Prototypes

// funcao construtora --> molde (classe)

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // Esse metodo seria copiado para todos os objetos criados
                                                                   // deixando o codigo pesado.
}
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}; // Esse metodo está sendo criado e jogado dentro de prototype.
// Portanto, toda vez que for criado um objeto pessoa, nao sera copiado o metodo .nomerCompleto().
// mas sim sua referencia que eh o prototype. Isso faz com que o codigo seje mais leve.

// instancia
const pessoa1 = new Pessoa('Luiz', 'Otavio');
const pessoa2 = new Pessoa('Maria', 'Silva');

console.dir(pessoa1, pessoa1.nomeCompleto());
console.dir(pessoa2, pessoa2.nomeCompleto());
// como voce pode ver, nao tem o metodo nomeCompleto() dentro de pessoa1 ou pessoa2. Esse metodo esta dentro de prototype.
// portanto, como o metodo nao eh copiado para os objetos criados, isso deixa o codigo mais leve.