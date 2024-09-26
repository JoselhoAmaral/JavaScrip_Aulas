// Modulos no Node.

const nome = 'Joselho';
const sobrenome = 'Amaral';

const falaNome = () => nome + ' ' + sobrenome;

/*
module.exports.nome = nome;
module.exports.SOBRENOME = sobrenome; // SOBRENOME eh a chave.
exports.falaNome = falaNome; // exports === module.exports
*/

this.qualquerCoisa = 'O que eu quiser exportar'; // Podemos usar tambem o this no lugar do exports

//console.log(module.exports);
// O exports eh usado para exportar variaveis e funcoes.

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}
// exports.Pessoa = Pessoa;

module.exports = {
    nome, sobrenome, falaNome, Pessoa
}; // Para as variaveis e funcoes exportarem dessa forma, preciso enviar todos de uma vez. 