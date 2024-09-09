// Map - mapeando arrays. Map cria um novo array com os dados do array original.
// Map retorna sempre a mesma quantidade de itens do array original. 
//               0   1   2  3  ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map( valor => valor*2); // retorne o dobro do array original.
console.log(numerosEmDobro);

console.log("-------------------------------------------------------");

// Retorne apenas uma string com o nome da pessoa.
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade:23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const soNomes = pessoas.map( obj => obj.nome);
console.log(soNomes);

console.log("-------------------------------------------------------");
/*
// Remova apenas a chave "nome" do objeto
// const soIdades = pessoas.map( obj => ({idade: obj.idade})); // Forma 1 de fazer  
const soIdades = pessoas.map( obj => { // forma 2 de fazer.
    delete obj.nome; // Esse comando exclui a chave nome do objeto.
    return obj;
});
for(let obj of soIdades){
    console.log(obj);
}
*/
console.log("-------------------------------------------------------");

// Adicione uma chave de id em cada objeto
const comId = pessoas.map( (obj, indice) => {
    obj.id = indice+1; //aqui adiciona o ID no objeto.
    return obj;
}); 

for(let obj of comId){
    console.log(obj);
}