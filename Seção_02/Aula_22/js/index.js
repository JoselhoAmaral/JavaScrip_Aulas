alert("Digite dois números para realizar uma soma.");

// A função Number(); pega o resultado do prompt e transforma de string para número. 
let numeroUm = Number(prompt("Digite o primeiro número: "));
let numeroDois = Number(prompt("Digite o segundo número: "));
let soma = numeroUm + numeroDois;

// alert("A soma dos número é: " + soma);
alert(`A soma dos número é: ${soma}`); // essa é a forma mais atualizada de fazer o print no JS.
