function principal () {
    
    // Declaração do caminho do relogio e botões.
    const timerHTML = document.querySelector('#timer');
    const btnIniciar = document.querySelector('.iniciar');
    const btnPausar = document.querySelector('.pausar');
    const btnParar = document.querySelector('.parar');
    // Declaraçãodas viáveis globais
    let contador = 0;
    let timer;
    
    // Início das funções
    
    // Botão de iniciar o time
    btnIniciar.addEventListener ('click', function(event){
        clearInterval(timer); // Limpa o timer
        timer = setInterval(() => { // Esse é uma função de tempo que executa o que está dentro em 1 segundo.
            contador++; 
            timerHTML.innerHTML = relogio (contador);
        }, 1000);

        timerHTML.classList.add("timer-iniciado");
        timerHTML.classList.remove("timer-pausado");
        timerHTML.classList.remove("timer-parado");
    });
    // Botão de pausar o time
    btnPausar.addEventListener ('click', function(event){
        clearInterval(timer);
        timerHTML.classList.add("timer-pausado");
        timerHTML.classList.remove("timer-iniciado");
        timerHTML.classList.remove("timer-parado");
    });
    // Botão de parar o time
    btnParar.addEventListener ('click', function(event){
        clearInterval(timer);
        contador = 0;
        timerHTML.innerHTML = `00:00:00`;

        timerHTML.classList.add("timer-parado");
        timerHTML.classList.remove("timer-iniciado");
        timerHTML.classList.remove("timer-pausado");
    });
    
    function relogio (contadorSegundos){
        const data = new Date(contadorSegundos * 1000);
        
        return data.toLocaleTimeString("pt-BR",{
            hour12: false, // Desativa o relogio AM e PM fazendo ser o de 24 horas.
            timeZone: "UTC" // Coloca o relógio no time zone de GreenWich. Ou seja, +0.
        });
    }
}
principal();