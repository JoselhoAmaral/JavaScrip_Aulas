// Metodos uteis para objetos.

// Copiando objetos
const produto = {nome: 'caneca', preco: 5.90};
/*
const outroProduto = { ...produto, materia: 'vidro' }; // Alem de fazer um espread, tambem posso adicionar parametros no objeto.
const outroProduto = Object.assign({}, produto, { material: 'vidro'}); // Outra maneira de copiar o objeto.
*/
const outroProduto = {nome: produto.nome, preco: produto.preco, material: 'vidro'}; // Maneira mais manual de copiar o objeto.

console.log(produto);
console.log(outroProduto);

outroProduto.nome = 'garrafa';
outroProduto.preco = 2.90;

console.log(produto);
console.log(outroProduto);
console.log(Object.keys(outroProduto)); // mostra as chaves do objeto.
 // Object.freeze(produto); // isso congela os dados do objeto para não poder alterar ele.

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Mostra as configurações de uma chave.
console.log(Object.values(produto)); // mostra os valores do objeto.
for( let entry of Object.entries(outroProduto)) { // O Object.entries() monta tipo um array com o objeto
    console.log(entry);
}
for( let entry of Object.entries(outroProduto)) { 
    console.log(entry[0], entry[1]); // Como o Object.entries() retorna um vetor com duas posicoes por vez (por causa do objeto outroProduto 
    // ter dois valores por vez). Portanto, atraves disso podemos pegar os valor atraves do metodo de posicao de arrays.
} 
for( let [chave, valor] of Object.entries(outroProduto)) { // Com o Object.entries() eh possivel retornar os valors do objeto. 
    console.log(chave, valor);
}