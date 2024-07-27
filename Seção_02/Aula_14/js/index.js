/*
Não podemos criar constantes com palavras reservadas do sistema.
Constantes precisam ter nomes significativos.
Não pode começar o nome de uma constante com um número.
Não podem conter espaços ou traços no nome da constante.
Utilize camelCase. Ex.: nomeCompleto, nomeDaRua,....
O JS tem case-sensitive. Ex.: nomeCompleto diferente de nomecompleto.
Não podemos modificar o valor de uma constante.
Não utilize VAR, utilize CONST.
*/

const nome = "João"; // Essa constante é do tipo String.

const primeiroNumero = 5;
const segundoNumero = 10;
let resultado = primeiroNumero * segundoNumero;

console.log(resultado);

console.log(resultado + segundoNumero); // Aqui é uma operação de soma porque é a soma de dois number

const primeiroNumeroString = "5";

console.log(typeof(resultado)); // Para printar o tipo da variável.
console.log(typeof primeiroNumeroString);

console.log(resultado + primeiroNumeroString); // Aqui é uma operação de concatenação porque é dois tipos diferentes de variáveis.

console.log(typeof(resultado + primeiroNumeroString)); // Como estou concatenando um number e string, o resultado é string.