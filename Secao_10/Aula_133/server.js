// Express Router e Controllers

// Aqui estamos criando uma pagina web.
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(
    express.urlencoded({
        extended: true
    })
); // Esse comando eh para tratar o request.body (trata formularios)
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
}); // Porta 3 mil. Temos que escolher uma porta para o express ficar esperando escutar uma resposta.