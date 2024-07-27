function principal () {
    const formulario = document.querySelector(".formulario");
    const resultado = document.querySelector(".resultado");
    //const btnEnviar = document.querySelector(".btnEnviar");

    function calculaIMC(peso, altura) {
        return (peso/(altura*altura));
    }

    function determinaFaixa (IMC) { // Função para determinar a faixa do IMC.
        if (IMC < 18.5) return "Abaixo do peso";
        else if (IMC >= 18.5 && IMC < 24.5) return "Peso normal";
        else if (IMC >= 24.5 && IMC < 30) return "Sobrepeso";
        else if (IMC >= 30 && IMC < 35) return "Obesidade grau 1";
        else if (IMC >= 35 && IMC < 40) return "Obesidade grau 2";
        else return "Obesidade grau 3";
    }

    function criaResultado (IMC, faixaDePeso) {
        let novoParagrafo = document.createElement('p');        
        novoParagrafo.textContent = `Seu IMC é ${IMC.toFixed(2)} e está na faixa de ${faixaDePeso}`; // Mostra o IMC com 2 casa decimais.
        novoParagrafo.classList.add('resultadoIMC'); //atribui uma classe ao paragrafo.
        resultado.appendChild(novoParagrafo);
    }

    function atualizaResultado (IMC, faixaDePeso) {
        const paragrafoResultado = resultado.querySelector('.resultadoIMC');
        paragrafoResultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} e está na faixa de ${faixaDePeso}`; // Mostra o IMC com 2 casa decimais.
    }

    function apresentaCalculoIMC(evento) {
        evento.preventDefault();

        const peso = Number((document.querySelector(".peso")).value);
        const altura = Number((document.querySelector(".altura")).value);

        const IMC = calculaIMC(peso, altura);
        
        const faixaDePeso = determinaFaixa(IMC);

        const paragrafoResultado = resultado.querySelector('.resultadoIMC'); // busca o caminho do parágrafo resultado e caso não exista, a variável é null.

        if (paragrafoResultado === null){ // Esse IF determina se o parágrafo Resultado existe, então atualize os dados do IMC.
            criaResultado (IMC, faixaDePeso);
        }else{
            atualizaResultado (IMC, faixaDePeso);
        }
    }
    formulario.addEventListener('submit', apresentaCalculoIMC);
}
principal();