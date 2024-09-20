// Uso do Babel.
// Babel eh um tipo de conversor de codigo. Ele converte um codigo js em um codigo js mais antigo que eh compativel com a maioria dos navegadores.
// O codigo bundle.js eh o mesmo que o main.js, mas que o primeiro esta em um js antigo.

const nome = 'Joselho';
const obj = {nome};
const novoObj = { ...obj };
console.log(novoObj);

/*
Para usar o Babel....
No terminal:
1. instalacao do Babel
    npm init -y
    npm install --save-dev @babel/cli @babel/preset-env @babel/core

2. conversao do arquivo
    npx babel ./Aula_115/main.js -o bundle.js --presets=@babel/env

OBS.: Caminho para o arquivo para ser convertido: ./Aula_115/main.js
      Caminho e nove do arquivo convertido: bundle.js
*/