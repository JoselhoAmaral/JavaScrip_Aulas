function principal (){

    const listaDeTarefas = document.querySelector('.lista-de-tarefas');
    const formulario = document.querySelector('.formulario');
    
    function criaParagrafoTarefa (TAREFA){
        
        const criaParagrafo = document.createElement('li');
        criaParagrafo.innerText = `${TAREFA}`;
        listaDeTarefas.appendChild(criaParagrafo);
        
        /*
        const existeP = document.querySelector('.lista-de-tarefas p'); // Verifica se existe um parágrafo p dentro da div resultado.

        // Se o parágrafo p não existe, cria um p e apresenta o resultado. Se não, modifica o resultado.
        if (existeP === null){
            const criaParagrafo = document.createElement('p');
            criaParagrafo.innerText = `${TAREFA}`;
            listaDeTarefas.appendChild(criaParagrafo);
        }
        else{
            existeP.innerText = `${TAREFA}`;
        }
        */
    }

    function criaTarefa (evento){
        evento.preventDefault();
        
        const tarefa = (document.querySelector('.tarefa').value);
        console.log(tarefa);
        
        criaParagrafoTarefa (tarefa);
        
        document.querySelector('.tarefa').innerHTML = " ";
    }
    formulario.addEventListener('submit', criaTarefa);

}
principal();