// Exercicio de validacao de CPF.
/*
CPF: 705.484.450-52
Onde o calculo eh: 7 x10 + 0 x9 + 5 x8 + 4 x7 + 8 x6 + 4 x5  + 4 x4 + 5 x3 + 0 x2 = 237

11 - (237 % 11) = 5 (Primeiro digito). Se maior que 9, sera 0.

Agora com isso temos o CPF: 705.484.450-5

Onde fazemos o segundo calculo: 7 x11 + 0 x10 + 5 x9 + 4 x8 + 8 x7 + 4 x6  + 4 x5 + 5 x4 + 0 x3 + 5 x2 = 284

11 - (284 % 11) = 2 (Segundo digito). Se maior que 9, sera 0.
*/

const cpf = '705.484.450-52';
const cpfLimpo = cpf.replace(/\D+/g, ''); // isso faz com que tudo que nao seje numeros seje retirado.
console.log(cpf, cpfLimpo);
cpfArray = Array.from(cpfLimpo).slice(0,-2); // Aqui o cpfLimpo eh transformado em array e retirei os dois ultimos digitos do cpf que serao desnecessarios.
console.log(cpfArray);

let primeiroDigitoCpf = cpfArray.reduce ((acumulador, valor, indice) => {
    return acumulador += (valor * (10 - indice)); 
}, 0); // A funcao .reduce() foi utilizada para encontrar o valor bruto de primeiroDigitoCpf
primeiroDigitoCpf = 11 - (primeiroDigitoCpf % 11); // Essa linha eh para realmente encontrar o primeiro digito identificador do cpf.

if(primeiroDigitoCpf > 9) primeiroDigitoCpf = 0; //Se maior que 9, sera 0.

cpfArray.push(String(primeiroDigitoCpf)); // adiciona o digito verificador no array.

let segundoDigitoCpf = cpfArray.reduce ((acumulador, valor, indice) => {
    return acumulador += (valor * (11 - indice)); 
}, 0); // A funcao .reduce() foi utilizada para encontrar o valor bruto de segundoDigitoCpf

segundoDigitoCpf = 11 - (segundoDigitoCpf % 11); // Essa linha eh para realmente encontrar o segundo digito identificador do cpf.

if(segundoDigitoCpf > 9) segundoDigitoCpf = 0; //Se maior que 9, sera 0.
cpfArray.push(String(segundoDigitoCpf)); // adiciona o digito verificador no array.

if(cpfArray.join('') === cpfLimpo){ // Esse if pega o cpfArray e converte em uma string e compara com o cpfLimpo
    console.log(`CPF: ${cpf} - Verdadeiro`);
}else {
    console.log(`CPF: ${cpf} - Não confere`);
}