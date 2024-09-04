// O return --> Retorna um ou mais valores, Termina a funcao.
// O comando console.log(); apresenta uma coisa. Ela não é um retorno.

// Essa funcao tem um retorno que eh um objeto.
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa ('joselho', 'Amaral');

console.log(p1, typeof(p1));

// Essa funcao tem dois retornos, onde o primeiro retorno resulta na funcao interna. Por exemplo, se eu mandar criaMultiplicador(2) 
// resulta em f(n) = n * 2
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador; 
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

// Nesse ultimo estou executando a funcao dentro da contante.
console.log(duplica(2)); // No caso, f(2) = 2 * 2.
console.log(triplica(2));
console.log(quadriplica(2));