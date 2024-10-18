//Esse eh o controller. O controller eh onde fica o caminho destrichado da rota.

exports.paginaInicial = (request, response, proximo) => { // Exportando resposta do site que eh um formulario
    response.render('index'); // Esse comando manda renderizar (apresentar) o arquivo index.ejs
};

exports.trataPost = (request, response, proximo) => {
    response.send('Sou a nova rota de post');
};