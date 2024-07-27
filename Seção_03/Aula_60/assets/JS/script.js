// Escreva uma função que recebe dois números e retorne o maior deles.

function principal (){

    const resultado = document.querySelector('.resultado');
    const formulario = document.querySelector('.formulario');

    function determinarMaiorNumero (numeroOne, numeroTwo){
        if (numeroOne > numeroTwo) {
            return numeroOne;

        }else if (numeroTwo > numeroOne) { 
            return numeroTwo;

        }else { 
            return "Os números são iguais";
        }
    }

    function criaParagrafoEModifica (maiorNumero){
        const existeP = document.querySelector('.resultado p'); // Verifica se existe um parágrafo p dentro da div resultado.

        // Se o parágrafo p não existe, cria um p e apresenta o resultado. Se não, modifica o resultado.
        if (existeP === null){
            const criaParagrafo = document.createElement('p');
            criaParagrafo.innerText = `O maior número é: ${maiorNumero}.`;
            resultado.appendChild(criaParagrafo);
        
        }else{
            existeP.innerText = `O maior número é: ${maiorNumero}.`;
        }
    }

    function apresentaNumero (evento){
        evento.preventDefault();

        // A recepção de dados tem que ficar dentro da função que tem o preventDefault(). Ou seja, numeroUm e numeroDois deve ficar dentro da função apresentaNumero.    
        const numeroUm = Number((document.querySelector('.numero-um')).value);
        const numeroDois = Number((document.querySelector('.numero-dois')).value);

        const maiorNumero = determinarMaiorNumero(numeroUm, numeroDois); //Joga na função para verificar qual é o maior número.

        criaParagrafoEModifica (maiorNumero);
    }
    formulario.addEventListener('submit', apresentaNumero);

}
principal();