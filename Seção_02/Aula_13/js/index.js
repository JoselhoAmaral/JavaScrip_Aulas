/*
Não podemos criar variáveis com palavras reservadas do sistema.
Variáveis precisam ter nomes significativos.
Não pode começar o nome de uma variável com um número.
Não podem conter espaços ou traços no nome da variável.
Utilize camelCase. Ex.: nomeCompleto, nomeDaRua,....
O JS tem case-sensitive. Ex.: nomeCompleto diferente de nomecompleto.
Não pode declarar novamente a mesma variável com LET.
Não utilize VAR, utilize LET.
*/

let nome; // O let é usado para declarar variável. 
console.log(nome); // Valor undefined.

nome = "João"; // Variável inicializada. Essa variável é do tipo String.

console.log(nome, "nasceu em 1984.");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", nome, "em 2015.");
console.log("O filho de", nome, "se chama Eduardo.");