// Escrevendo e lendo arquivos

const fs = require('fs').promises;
const path = require('path');
const escreve = require('./escrever');
const ler = require('./ler');

// const caminhoArquivo = path.resolve(__dirname, '..','teste.txt'); // O '..' eh para voltar uma pasta, ou seja, para pasta secao_10
const caminhoArquivo1 = path.resolve(__dirname,'teste1.txt');
const caminhoArquivo2 = path.resolve(__dirname,'teste2.txt');


fs.writeFile(caminhoArquivo1, 'Frase 1\n', {flag: 'w', encoding: 'utf8'}); // Esse comando cria um arquivo no "caminhoArquivo" com o conteudo "frase 1".
// flag: 'w' serve para apagar tudo que tem no arquivo. flag: 'a' adiciona um nova frase toda vez que executa o script
// O \n serve para quebrar a linha.


const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'}
];

const json = JSON.stringify(pessoas, '', 2); // O terceiro campo eh a identacao. Que no caso sao dois espacos.
fs.writeFile(caminhoArquivo2, json, {flag: 'w'});
