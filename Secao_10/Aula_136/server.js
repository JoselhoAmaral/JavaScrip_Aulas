// Express - Webpack - 
// para instalar o EJS via terminal: npm i ejs

// Aqui estamos criando uma pagina web.
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(
    express.urlencoded({
        extended: true
    })
); // Esse comando eh para tratar o request.body (trata formularios)

app.use(express.static(path.resolve(__dirname, 'public'))); // Aponta para o conteudos publicos

app.set('views', path.resolve(__dirname, 'src', 'views')); //setando o caminho das views
app.set('view engine', 'ejs') // escolhendo a engine que sera usada nas views
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
}); // Porta 3 mil. Temos que escolher uma porta para o express ficar esperando escutar uma resposta.