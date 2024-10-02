const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escreve = require('./escrever');
const ler = require('./ler');

// cria o arquivo 
const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'}
];

const json = JSON.stringify(pessoas, '', 2); // converte o objeto em um json.
escreve(caminhoArquivo, json); // Envia o caminho e os dados para funcao escreve()

// le o arquivo
async function lerArquivo(caminho){
    const dados = await ler(caminho); // pede para a funcao ler() fazer o read do arquivo teste.json
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados); // converte o arquivo de json para objeto
    dados.forEach(valor => console.log(valor.nome)); //faz um for com os objetos para apresentar eles.
}
lerArquivo(caminhoArquivo);