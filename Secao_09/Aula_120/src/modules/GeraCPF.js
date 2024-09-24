import ValidaCPF from './ValidaCPF';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min))
    }//Cria um numero no formato string de forma aleatoria.

    formatado(cpf) { //funcao somente para formatar o CPF.
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    geraNovoCpf() { //essa funcao esta usando as funcoes importadas do ./ValidaCPF.
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;

        return this.formatado(novoCPF);
    }
}