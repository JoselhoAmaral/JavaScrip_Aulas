/*
Math.max[1,7,4,9,6,3,6,5,4,9]; //retorna o maior número.
Math.min[1,7,4,9,6,3,6,5,4,9]; //retorna o menor número.
Math.random(); //retorna um número aleatório.
Math.pow(2,10); // potência de 2^10.
*/

// Exercício:

let numero = Number( prompt("Digite um número: ")); // O comando Number() converte string para number.

// Cálculo
let raiz2numero = Math.sqrt(numero);
let imparPar = numero % 2 === 0;
    if (imparPar === false){
        imparPar = "Impar";
    }else{
        imparPar = "Par";
    }

let numeroNaN = Number.isNaN(numero);
    if (numeroNaN === true){
        numeroNaN = "Verdadeiro";
    }else{
        numeroNaN = "Falso";
    }

let arredondamentoBaixo = Math.floor(numero);
let arredondamentoCima = Math.ceil(numero);
let numero2CasasDecimais = numero.toFixed(2); // Mostra um número com 2 casa decimais.

const um = document.getElementById('perguntaNumeroUm');
um.innerHTML = numero;
const dois = document.getElementById('perguntaNumeroDois');
dois.innerHTML = numero;
const tres = document.getElementById('perguntaNumeroTres');
tres.innerHTML = numero;
const quatro = document.getElementById('perguntaNumeroQuatro');
quatro.innerHTML = numero;
const cinco = document.getElementById('perguntaNumeroCinco');
cinco.innerHTML = numero;

const perguntaDois = document.getElementById('perguntaDois');
perguntaDois.innerHTML = raiz2numero;
const perguntaTres = document.getElementById('perguntaTres');
perguntaTres.innerHTML = imparPar;
const perguntaQuatro = document.getElementById('perguntaQuatro');
perguntaQuatro.innerHTML = numeroNaN;
const perguntaCinco = document.getElementById('perguntaCinco');
perguntaCinco.innerHTML = arredondamentoBaixo;
const perguntaSeis = document.getElementById('perguntaSeis');
perguntaSeis.innerHTML = arredondamentoCima;
const perguntaSete = document.getElementById('perguntaSete');
perguntaSete.innerHTML = numero2CasasDecimais;

/*
document.body.innerHTML = `Seu número é: ${numero} <br />`;
document.body.innerHTML += `A raiz quadrada é: ${raiz2numero} <br />`;
document.body.innerHTML += `O número ${numero} é: ${imparPar} <br />`;
document.body.innerHTML += `O número ${numero} é NaN: ${numeroNaN} <br />`;
document.body.innerHTML += `O arredondamento do número ${numero} para baixo é: ${arredondamentoBaixo} <br />`;
document.body.innerHTML += `O arredondamento do número ${numero} para cima é: ${arredondamentoCima} <br />`;
document.body.innerHTML += `O número ${numero} com duas casa decimais é: ${numero2CasasDecimais} <br />`;
*/