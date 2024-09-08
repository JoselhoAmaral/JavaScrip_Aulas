// Filter - Filtrando Array. Sempre retorna um array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*
function callbackFiltrar(valor){
    return (valor > 10);
} 
const numerosFiltrados = numeros.filter(callbackFiltrar); // Isso pode ser reduzido...
*/
const numerosFiltrados = numeros.filter(valor => valor > 10); // filtro com numeros maiores que 10
console.log(numerosFiltrados);
console.log("--------------------------------------------------------------------------------");

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade:23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5); // filtro com nome de pessoas maiores ou iguais a 5 letras.
// Para apresentar o objeto pessoasComNomeGrande foi preciso criar um for. 
for (let valor of pessoasComNomeGrande){
    console.log(valor);
}
console.log("--------------------------------------------------------------------------------");

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50); // Filtro com pessoas com idade maior que 50 anos.
for (let valor of pessoasComMaisDeCinquentaAnos){
    console.log(valor);
}
console.log("--------------------------------------------------------------------------------");

const nomeQueTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); // .toLowerCase() passa todas as stringspara minusculo
// .endsWith('a') procura nos itens aqueles que terminam com a.
for (let valor of nomeQueTerminaComA){
    console.log(valor);
}