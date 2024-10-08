// Para instalar o nodemon: npm i nodemon --save-dev
// O "--save-dev" eh para salvar o nodemon como pacote de desenvolvimento
// O nodemon eh usado no terminal usando: npx nodemon (nome do arquivo)

// Aqui estamos criando uma pagina web.

const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
); // Esse comando eh para tratar o request.body (trata formularios)

/*
http://facebook.com/profiles/1234567  --> http://facebook.com/profiles/(parametro)
http://facebook.com/profiles/1234567?campanha=googleads&nome_campanha=seila --> http://facebook.com/profiles/1234567?(queryStrings)&(queryStrings)
*/

// metodo get
app.get('/', (request, response) => { // Essa eh a pagina raiz '/'.
    response.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name= "nome"><br>
            CPF: <input type="text" name= "cpf"><br>
            <button>Enviar Fomulário</button>
        </form>
    `);
});

/*
app.get('/testes/:idUsusarios?/:nome?', (requisicao, resposta) => { // para adicionar parametros "/:(parametro)?"
    console.log(requisicao.params); //mostra os paramtreos recebidos
    resposta.send(requisicao.params); // envia uma resposta que nesse caso eh um json com os parametros
}); // Para acessar eh http://localhost:3000/testes/(parametro qualquer: 2644)/(parametro qualquer: 8386426)
*/

app.get('/testes/:idUsusarios?/:nome?', (requisicao, resposta) => { // para adicionar parametros "/:(parametro)?"
    console.log(requisicao.query);
    resposta.send(requisicao.query); // Aqui eh para mostrar as query strings recebidas
}); // Para acessar eh http://localhost:3000/testes/?nome=Joselho&sobrenome=Amaral

// metodo post
app.post('/', (request, response) => { // recebe dados da raiz '/'.
    console.log(request.body); // request.body mostra os dados no body da pagina. 
    response.send(`Os valores enviados foram: ${request.body.nome}`); // aqui estou enviando uma resposta para pagina com os dados recebido em nome.
});// esse nome de "request.body.nome" eh o presente em (Nome: <input type="text" name= "nome"><br>)

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
}); // Porta 3 mil. Temos que escolher uma porta para o express ficar esperando escutar uma resposta.