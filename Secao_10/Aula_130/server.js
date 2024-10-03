// Express - Introducao
// Aqui estamos criando uma pagina web.

const express = require('express');
const app = express();

/*
         Criar, ler, Atualizar, Deletar
CRUD --> Creat, Read, Update, Delete
         Post,  Get,   Put,   Delete

https://meusite.com/ <- Get -> Entregue a pagina /
https://meusite.com/sobre <- Get -> Entregue a pagina /sobre
https://meusite.com/contato <- Get -> Entregue a pagina /contato
*/

// metodo get
app.get('/', (request, response) => { // Essa eh a pagina raiz '/'.
    response.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name= "nome">
            <button>Enviar</button>
        </form>
        `);
});

// metodo post
app.post('/', (request, response) => { // recebe dados da raiz '/'.
    response.send('Recebi o formulario!');
});

app.get('/contato', (request, response) => { // Essa pagina eh a de contato
    response.send('Obrigado por entrar em contato conosco.')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
}); // Porta 3 mil. Temos que escolher uma porta para o express ficar esperando escutar uma resposta.