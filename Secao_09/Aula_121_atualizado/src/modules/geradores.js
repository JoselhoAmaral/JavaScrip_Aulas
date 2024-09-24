const rand = (min, max) => Math.floor(Math.random() * (max - min) + min); // funcao de numeros aleatorios
const geraMaiusculas = () => String.fromCharCode(rand(65, 90)); 
// O comando String.fromCharCode() funciona gerando caracteres a partir de um numero que esteja na tabela ASC
const geraMinusculas = () => String.fromCharCode(rand(97, 122)); 
const geraNumero = () => String.fromCharCode(rand(48, 57)); 
const geraSimbolo = () => {
    const numeros = 
    [
        33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
        58,59,60,61,62,63,64,
        91,92,93,94,95,96,
        123,124,125,126
    ];

    return String.fromCharCode( numeros[ rand(0, numeros.length) ]); 
}// A linha acima retorna um numero aleatorio de dentro do vetor e manda para o comando String.fromCharCode().

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiusculas());
        minusculas && senhaArray.push(geraMinusculas());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }// O join() transforma de array para uma string.

    return senhaArray.join('').slice(0,qtd);
    //retorna uma string com a quantidade de caracteres pedidos por causa do slice().
}
