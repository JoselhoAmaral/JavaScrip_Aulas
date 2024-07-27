function escopoPrincipal() {
    const form = document.querySelector('.form'); //usado para selecionar elementos. Seleciona como se estivesse selecionando no CSS. Joga o endereço de .form na variável form.
    const resultado = document.querySelector('.resultado');


    /*
    form.onsubmit = function (evento) { //o comando .onsubimit é quando o formulário é enviado. Vamos trabalhar no evento de enviar os dados do formulário.
        evento.preventDefault(); //Desativa o recarregamento da página após enviar o formulário.

    }; */

    function adicionaResultado (resultadoForm) {
        let novoParagrafo = document.createElement('p'); // Cria um novo elemento p
        novoParagrafo.textContent = resultadoForm; // Adiciona algum texto ao parágrafo através do comando ".textContent".
        resultado.appendChild(novoParagrafo); // Adiciona o parágrafo a div resultado
    }


    const inforPessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const dadosPessoas = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value 
        }; //Objeto criado para estruturar os dados das pessoas.

        inforPessoas.push(dadosPessoas); //O push joga as informações do objeto dadosPessoas dentro do vetor inforPessoas.

        adicionaResultado (`Nome: ${nome.value} ${sobrenome.value} | Peso: ${peso.value} | Altura: ${altura.value}`); // Executa a função de mostrar resultado.
    }



    form.addEventListener('submit', recebeEventoForm); //comando que fica escutando os eventos. Nesse caso ele  vai escutar o evento de submit.

}
escopoPrincipal(); //executa a função principal.