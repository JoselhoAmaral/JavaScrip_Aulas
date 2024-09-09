// Reduce - Reduzindo array.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números com reduce.
const total = numeros.reduce ((acumulador, valor) => {
    return acumulador += valor;
}, 0); //Esse "0" é o valor inicial do acumulador.
console.log(`O total eh: ${total}`);

console.log("-------------------------------------------------------");
// retorne um array somente com os números pares.
const pares = numeros.reduce ((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador; 
}, []); //Esse "[]" é o valor inicial do acumulador. Um array vazio.
console.log(pares);

console.log("-------------------------------------------------------");
// retorne um array com o dobro dos valores
const dobro = numeros.reduce ((acumulador, valor) => {
    acumulador.push(valor*2);
    return acumulador; 
}, []); //Esse "[]" é o valor inicial do acumulador. Um array vazio.
console.log(dobro);

console.log("-------------------------------------------------------");
// Retorne a pessoa mais velha.

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade:23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, obj) => {
    if(acumulador.idade > obj.idade) return acumulador;
        return obj;
}); // Nesse caso, o acumulador pegou o 1 item de pessoas e Obj pegou 2 item de pessoas e assim adiante.

console.log(maisVelha);