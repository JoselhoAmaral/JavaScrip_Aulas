const fs = require('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf8'); // Mandamos o utf8 porque geralmente eh o padrao
// Funcao para ler arquivos.