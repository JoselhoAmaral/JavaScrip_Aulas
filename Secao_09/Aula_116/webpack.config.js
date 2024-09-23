const path = require('path');

module.exports = {
    mode: 'development', // Existe dois modos. Um deles eh o development.
    entry: './src/index.js', //caminho do arquivo de entrada.
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ //Isso sao as regras aplicadas.
            exclude: /node_modules/, //Isso exclui a pasta node_modules
            test: /\.js$/, // Isso testa o arquivo que vai ser o bundle.js. Ou seja, testa todos os arquivos .js
            use: {
                loader: 'babel-loader',
                option: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map' // Caso tenha algum erro no arquivo bundle.js, esse comando diz onde esta.
};