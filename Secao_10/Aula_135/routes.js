const express = require('express');
const route = express.Router(); // Criando a variavel de rotas. O .Router() cuida das rotas.
const homeController = require('./src/controllers/homeController'); // controller da pagina home
const contatoController = require('./src/controllers/contatoController'); //controller da pagina contato.

// Rotas do Home
route.get('/', homeController.PaginaInicial); // colocando a primeira rota GET atraves do metodo Controller.
route.post('/', homeController.trataPost); // Observe que aqui estou lancando como post. Perceba tambem que mudou o nome da funcao apos homeController.

// Rotas de Contato
route.get('/contato', contatoController.PaginaInicial); // Essa eh a rota do home do contato.

module.exports = route; //Exportando a rota para ser usada por outros arquivos.