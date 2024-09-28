const modulo1 = require('./modulo1'); // O require() eh usado para pegar as variaveis e funcoes exportadas.
console.log(modulo1);
console.log(modulo1.falaNome());

const { Pessoa } = require('./modulo1');
const p1 = new Pessoa('Jota');
console.log(p1.nome);

// const path = require('path'); // O path eh um modulo. Porem ele eh um modulo do Node e por isso ele nao precisa de um caminho. So precisa do nome.