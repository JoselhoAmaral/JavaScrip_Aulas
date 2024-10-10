//Esse eh o controller. O controller eh onde fica o caminho destrichado da rota.

exports.PaginaInicial = (request, response) => { // Exportando resposta do site que eh um formulario
    response.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name= "nome"><br>
            CPF: <input type="text" name= "cpf"><br>
            <button>Enviar Fomulário</button>
        </form>
    `);
}

exports.trataPost = (request, response) => {
    response.send('Sou a nova rota de post');
};