// window.document.write("Um texto"); // Isso é para escrever no navegador. O ojeto window só funciona no navegador.

// window.document.body.innerHTML = 'Qualquer outra coisa'; // Esse comando apaga todo o html e printa "Qualquer outra coisa".

// window.document.body.innerHTML += 'Qualquer outra coisa <br />'; // Esse comando apaga todo o html e printa "Qualquer outra coisa".

// Exercício:

let nome = prompt("Digite o seu nome: ");

//
let quantidadeLetrasNome = nome.length; //Retorna a quantidade de caracteres da palavra nome.
let segundaLetraNome = nome.charAt(1); //Esse comando me retorna uma determinada letra da string. Onde é contado 2° = posição + 1 porque começa a contar do zero.
let perguntaUm = nome.indexOf('l'); //Esse comando procura a letra L no "nome" e retorna o indice do local onde encontrou.
let perguntaDois = nome.lastIndexOf('l'); //Esse comando procura a letra  L no "nome" e retorna o indice do local onde encontrou. Contudo a pesquisa é de trás para frente.
let tresUltimasLetrasDoNome = nome.slice(nome.length - 3, nome.length); //O .slice() retorna uma fatia de caracteres de nome. Nesse caso estou pegando as três ultimas letras de nome utilizando o comando .lenght  
let palavrasDoNome = nome.split(' '); //Esse comando parte o "nome" em pedaços. Nesse caso ele tira os espaços e retorna as palavras sem o espaço.
let NomeEmMaisculo = nome.toUpperCase(); //Retorna o "nome" em maiúsculo.
let NomeEmMinusculo = nome.toLowerCase(); //Retorna o "nome" em minúsculo.
// 

document.body.innerHTML = `Seu nome é: ${nome} <br />`;
document.body.innerHTML += `Seu nome tem ${quantidadeLetrasNome} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetraNome} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra L no seu nome? ${perguntaUm + 1} <br />`;
document.body.innerHTML += `Qual o último índice da letra L no seu nome? ${perguntaDois + 1} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${tresUltimasLetrasDoNome} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${palavrasDoNome} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${NomeEmMinusculo} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${NomeEmMaisculo} <br />`;

