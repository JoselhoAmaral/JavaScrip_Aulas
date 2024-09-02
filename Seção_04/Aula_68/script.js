// declaração literal -- Function hoisting, é quando o JavaScript eleva a função. Ou seja, ele é executada primeiro.
function falaOi() {
    console.log("Oi");
}
falaOi();

// Function Expression --> é quando jogo o resultado de uma função em uma variável ou constante. Sempre recebe no final um ";".
const souUmDado = function() {
    console.log("Sou um dado");
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
};
funcaoArrow();

// function dentro de objeto
const obj = {
    tipo: "robo",
    nome: "iatool",
    falar() {
        console.log("Estou falando oi...");
    }
};
obj.falar();