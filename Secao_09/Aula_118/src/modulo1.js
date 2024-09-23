const nome = 'Joselho';
const sobrenome = 'Amaral';
const idade = 26;

function soma( x, y) {
    return x + y;
}

// Eh possível ja criar a variavel exportando ela.
export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default function mult2(x, y) { //Aqui estou colocando para exportar a funcao mult2 como padrao.
    return x*y;
}

export{nome as nome1, sobrenome, idade, soma}; // Podemos esta enviando a variaveis tambem com outro nome.
// O comando acima esta enviando as variaveis que estao dentro de chaves.

// tambem posso exporta como padrao da seguinte forma:
// export{nome as nome1, sobrenome, idade, soma, mult2 as default};