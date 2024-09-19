// Fetch API e Axios (JSON)

/*
// Utilizando Fetch API --> usado para carregar dados de um arquivo JSON
fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json));
*/

// utilizando axios --> usado para carregar dados de um arquivo JSON
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))

    //funcao utilizada para criar tabela e jogar os dados do JSON nela.
function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    for(let pessoa of json) {
        //criar linha
        const tr = document.createElement('tr');

        //criar colunas
        let td1 = document.createElement('td'); //criando coluna
        td1.innerHTML = pessoa.nome; // Adicionando conteudo na coluna
        tr.appendChild(td1); //adicionando coluna na linha

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3); 

        table.appendChild(tr); //adicionando linha a tabela
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}