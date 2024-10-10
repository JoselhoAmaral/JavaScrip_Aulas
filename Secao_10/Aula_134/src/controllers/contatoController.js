//Esse eh o controller. O controller eh onde fica o caminho destrichado da rota. Nessa eh a rota do contato

exports.PaginaInicial = (request, response) => {
    response.send('Obrigado por entrar em contato!');
};