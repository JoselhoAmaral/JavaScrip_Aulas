// Listando arquivos com FS e Recursao mutua.

const fs = require('fs').promises; // Para trabalhar com caminhos
const path = require('path');

/*
fs.readdir(path.resolve(__dirname)) //funcao assincrona. Ela Mostra o que tem dentro da pasta atual.
    .then(files => console.log(files))
    .catch(erro => console.log(erro));
*/

async function readdir(rootDir) { // readdir eh uma funcao que recebe um caminho como argumento.
    rootDir = rootDir || path.resolve(__dirname); // rooDir eh o caminho ou pega o caminho onde esta esse script.
    const files = await fs.readdir(rootDir);
    walk(files, rootDir); // manda o arquivo (nome) e o caminho dele
}

async function walk(files, rootDir) {
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file); // monta o caminho de cada arquivo ou diretorio.
        const stats = await fs.stat(fileFullPath); // verifica o status de cada caminho

        if(/\.git/g.test(fileFullPath)) continue; // Essa linha faz pular a pesquisa quando encontra uma pasta do git
        if(/node_modules/g.test(fileFullPath)) continue; // Essa linha faz pular a pesquisa quando encontra uma pasta do node_modules

        if(stats.isDirectory()){
            readdir(fileFullPath); // Se for um diretorio, refaca a pesquisa por arquivos dentro desse diretorio
            continue;
        }

        if(
            !/\.html$/g.test(fileFullPath) && !/\.css$/g.test(fileFullPath)
        ) continue; // Comando para permitir somente arquivos com final .html ou .css

        console.log(fileFullPath); // verifica se cada caminho eh um arquivo ou diretorio
    }
}

readdir('C:/Users/Samsung/Documents/GitHub/JavaScrip_Aulas');