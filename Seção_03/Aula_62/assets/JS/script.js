// Escreva uma função que recebe um numero e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 ou 5 = Retorne o própria número 
// Checar se o número é realmente um número = Retorne o próprio número
// Use a função com números de 0 a 100.

function principal (){

    const resultado = document.querySelector('.resultado');
    const formulario = document.querySelector('.formulario');
    
    function divisivelOuNao (NUMERO){
        if (NUMERO % 3 === 0 && NUMERO % 5 === 0){
            return 'FizzBuzz';
        }else if (NUMERO % 3 === 0){
            return 'Fizz';
        }else if (NUMERO % 5 === 0){
            return 'Buzz';
        }else return NUMERO;
    }
    
    function criaParagrafoEModifica (NUMERO){
        const existeP = document.querySelector('.resultado p'); // Verifica se existe um parágrafo p dentro da div resultado.

        // Se o parágrafo p não existe, cria um p e apresenta o resultado. Se não, modifica o resultado.
        if (existeP === null){
            const criaParagrafo = document.createElement('p');
            criaParagrafo.innerText = `${NUMERO}`;
            resultado.appendChild(criaParagrafo);
        
        }else{
            existeP.innerText = `${NUMERO}`;
        }
    }

    function apresentaNumero (evento){
        evento.preventDefault();
        
        // A recepção de dados tem que ficar dentro da função que tem o preventDefault(). Ou seja, numeroUm e numeroDois deve ficar dentro da função apresentaNumero.    
        
        const numero = (document.querySelector('.numero').value);
        console.log(numero);
        let numeroDivisivel;
        
        if (numero !== NaN){
            numeroDivisivel = divisivelOuNao (numero);
        }
        console.log(numeroDivisivel);

        criaParagrafoEModifica (numeroDivisivel);
    }
    formulario.addEventListener('submit', apresentaNumero);

}
principal();