function criaCalculadora() {
    return {
        display: document.querySelector('.display'), // display da calculadora

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        // Essa funcao escuta os botoes que estao sendo clicados e apartir do botao clicado executa uma acao.
        cliqueBotoes(){
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
        },

        // Essa funcao adiciona itens no display por concatenacao. Basicamente apresenta os botoes apertados na calculadora.
        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); //Aqui o slice funciona retirando o ultimo numero de uma sequancia. No caso, tira do display.
        },

        realizaConta() {
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
        },

        // Essa funcao eh basicamente para responder quando o cliente aperta enter no teclado.
        pressionaEnter() {
            this.display.addEventListener('keyup', evento => {
                if(evento.keyCode === 13){
                    this.realizaConta();
                }
            });
        },
    };
}

const calculadora = criaCalculadora(); // cria o objeto calculadora.
calculadora.inicia(); // inicia as funcoes basicas da calculadora.