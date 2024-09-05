function NovaCalculadora() {
    this.display = document.querySelector('.display'); // display da calculadora

    this.inicia = function() {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    // Essa funcao escuta os botoes que estao sendo clicados e apartir do botao clicado executa uma acao.
    this.cliqueBotoes = function(){
        document.addEventListener('click', evento => {
            const elemento = evento.target;

            if(elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText);
            }

            if(elemento.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if(elemento.classList.contains('btn-del')) {
                this.apagaUm();
            }
            if(elemento.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    };

    // Essa funcao adiciona itens no display por concatenacao. Basicamente apresenta os botoes apertados na calculadora.
    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
    };

    this.clearDisplay = function() {
        this.display.value = '';
    };

    this.apagaUm = function() {
        this.display.value = this.display.value.slice(0, -1); //Aqui o slice funciona retirando o ultimo numero de uma sequancia. No caso, tira do display.
    };

    this.realizaConta = function() {
        let conta = this.display.value;

        try {
            conta = eval(conta); // Esse comando eh a alma da calculadora, ele eh que calcula o resultado. Porem nao eh bom usar ele porque ele pode ser usado para injecao de codigos maliciosos.

            if(!conta){
                alert('Conta Inválida;');
                return;
            }
            this.display.value = String(conta);
        }catch(erro){
            alert('Conta Inválida;');
            return;
        }
    };

    // Essa funcao eh basicamente para responder quando o cliente aperta enter no teclado.
    this.pressionaEnter = function() {
        this.display.addEventListener('keyup', evento => {
            if(evento.keyCode === 13){
                this.realizaConta();
            }
        });
    };
}

const calculadora = new NovaCalculadora(); // Cria uma calculadora
calculadora.inicia(); // inicia as funcoes basicas da calculadora.