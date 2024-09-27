const multiplicacao = require('./modulo1'); // O require() eh usado para pegar as variaveis e funcoes exportadas.

console.log(multiplicacao(9,5));

/* Caminhos */
console.log(__filename); // Da o caminho ate o nome do arquivo desde a raiz C:
console.log(__dirname); // Da somente o caminho onde este arquivo esta desde a raiz C:

const path = require('path');
console.log(path.resolve(__dirname, '..', 'Aula_124')); 
/* Com o path podemos manipular pastas. Onde o __dirname da o caminho.
   O '..' volta uma pasta e digitar um nome de uma pasta permite entrar nela.*/