
const inputTarefa = document.querySelector ('.tarefa');
const btnTarefa = document.querySelector ('.butao-tarefa');
const tarefas = document.querySelector ('.lista-de-tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(evento) { // Quando a tecla entra for pressionada, então é o mesmo que apertar o btnTarefa.
    if (evento.keyCode === 13) {
        if (!inputTarefa.value) return; // Se o campo de inputTarefa está vazio, então não faz nada.
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput (){ 
    inputTarefa.value = ''; // Limpa o input após enviar o texto digitado.
    inputTarefa.focus(); // Mantém um cursor piscando dentro do campo de digitação.
}

function criaBotaoApagar (li) { //Função que adiciona um botão ao lado do li para apagar o li.
    li.innerText += ' '; // adiciona um espaço entre o li e o botão apagar.
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class','apagar'); // O setAttribute(); pode adicionar atributo a tags como classe, título, id e etc.
    botaoApagar.setAttribute('title','Apagar está tarefa');
    li.appendChild(botaoApagar);

}

function criaTarefa (textoInput){ //Função que cria tarefas.
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar (li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() { // "Função" que monitora o click do botão de btnTarefa.
    if (!inputTarefa.value) return; // Se o campo de inputTarefa está vazio, então não faz nada.
    criaTarefa(inputTarefa.value); // "caso não" envia o texto de inputTarefa para a função criaTarefa.
});

document.addEventListener('click', function(evento) { // "função" para apagar as tarefas.
    const elemento = evento.target; // Pega todos os locais onde o mousse clica.
    if (elemento.classList.contains('apagar')){ // O if verifica se está licando no botão de apagar da tarefa. 
        elemento.parentElement.remove(); // Comando para apagar o elemento li.
    }
});

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '');
    }

}