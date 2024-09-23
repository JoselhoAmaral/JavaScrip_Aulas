// ES6 Modules - Import/Export

// Para importa o arquivo, precisa dizer o que esta importando e de onde. O comando abaixo faz isso.
// import{ nome as nome1, sobrenome, idade, soma } from './modulo1';
// Podemos importar variaveis e outras coisas e modificar seus nomes.
import{nome1, sobrenome, idade, soma, Pessoa } from './modulo1';
import funcaoMulti from './modulo1'; //Aqui estou importando uma variavel/funcao default. Como so pode ter uma, posso dar qualquer nome para ela. E eh sem chaves.

const nome2 = 'João';
const p1 = new Pessoa('Matheus', 'Fernando');
// Importamos a classe pessoa, mas so criamos o abjeto agora.

console.log(nome1, sobrenome, idade);
console.log(nome2) // nesse caso foi mudado o nome da variavel para nome2 para que ficasse em uma sequencia logica ou nao desse conflito por ter o mesmo nome.
console.log(soma(400, 3289));
console.log(p1);
console.log('O resultado da multiplicação de 8 e 9:',funcaoMulti(8,9));
