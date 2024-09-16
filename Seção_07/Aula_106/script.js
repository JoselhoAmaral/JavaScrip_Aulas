// Validando CPF com classes

class ValidaCPF {
    constructor(cpfEnviado){
        // configurando a variavel de manupulacao do cpf para ser protegida.

        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') //tira tudo que nao seja numero do cpf.
        });
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof(this.cpfLimpo) !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false; 
        if(this.eSequencia()) return false;
        this.geraNovoCpf();
        
        return this.novoCPF === this.cpfLimpo; // verifica se o novo CPF criado eh igualao cpfLimpo.
    }

    eSequencia() {
        // Esse comando faz o seguinte. Pega a primeira posicao de cpfLimpo e repete 11 vezes e compara com cpfLimpo.
        // Se for igual, entao eh uma sequencia. Uma repeticao.
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.lenght) === this.cpfLimpo; 
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); // retira os ultimos dois digitos verificadores do cpfLimpo
        const digito1 = this.geraDigito(cpfSemDigitos); // gera o primeiro digito verificador do cpf.
        const digito2 = this.geraDigito(cpfSemDigitos + digito1); // gera o segundo digito verificador do cpf.
        this.novoCPF = cpfSemDigitos + digito1 + digito2; // retorna o novo cpf.
    }
    // metodo que gera ultimos 2 digitos do cpf.
    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.lenght + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'; // Se o numero for menor que 9, enviar a string de digito. Caso não, envie 0.
    }

}

let validacpf = new ValidaCPF('070.987.720-03');

if(validacpf.valida()) {
    console.log('CPF Válido');
}else{
    console.log('CPF inválido');
}