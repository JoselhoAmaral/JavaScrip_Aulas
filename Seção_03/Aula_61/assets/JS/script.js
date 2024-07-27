// Escreva uma função chamada ePaisagem que recebe dois argumentos,
// largura e altura de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem.

function principal (){

    const resultado = document.querySelector('.resultado');
    const formulario = document.querySelector('.formulario');

    function ePaisagem (ALTURA, LARGURA){
        if (LARGURA > ALTURA) {
            return  true;

        }else if (LARGURA === ALTURA) { 
            return 'nas Mesmas dimensões';

        }else { 
            return false;
        }
    }

    function criaParagrafoEModifica (maiorNumero){
        const existeP = document.querySelector('.resultado p'); // Verifica se existe um parágrafo p dentro da div resultado.

        // Se o parágrafo p não existe, cria um p e apresenta o resultado. Se não, modifica o resultado.
        if (existeP === null){
            const criaParagrafo = document.createElement('p');
            criaParagrafo.innerText = `A imagem está ${maiorNumero}.`;
            resultado.appendChild(criaParagrafo);
        
        }else{
            existeP.innerText = `A imagem está ${maiorNumero}.`;
        }
    }

    function apresentaDimensao (evento){
        evento.preventDefault();

        // A recepção de dados tem que ficar dentro da função que tem o preventDefault(). Ou seja, numeroUm e numeroDois deve ficar dentro da função apresentaNumero.    
        const altura = Number((document.querySelector('.altura')).value);
        const largura = Number((document.querySelector('.largura')).value);

        let maiorNumero = ePaisagem(altura, largura); //Joga na função para verificar qual é o maior número.

        if (maiorNumero === true){
            maiorNumero = 'no Modo Paisagem';
        }else if (maiorNumero === false){
            maiorNumero = 'no Modo Retrato';
        }

        criaParagrafoEModifica (maiorNumero);
    }
    formulario.addEventListener('submit', apresentaDimensao);

}
principal();