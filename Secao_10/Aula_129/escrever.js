const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag:'w'});
};

// Essa funcao cria um arquivo. Ele recebe os dados do arquivo e o caminho do arquiva que criara.