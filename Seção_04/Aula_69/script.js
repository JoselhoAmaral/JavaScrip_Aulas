// arguments é todos os itens enviados para função. Nesse caso é: "valor", 8,7,6,5,3,2,1
function funcao1() {
    console.log(arguments[0]);
}
funcao1("valor", 8,7,6,5,3,2,1);

function funcao2() {
    let total = 0;
    for (let argumento of arguments){ // nesse for, o argumento serve para passar os valores e o arguments representa até onde vai o for.
        total += argumento;
    }
    console.log(total);
}
funcao2(8,7,6,5,3,2,1);

// OBS.: arguments não funciona em arrow funtion.

function funcao3(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao3 (1,2,3); // Se eu não enviar a quantidade de argumentos necessários, os argumentos que faltam são considerados undefined.

function funcao4(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao4(2); // nessa função tem valores padrões para os parementros b e c caso não sejam enviados como é mostrado.

// Aqui a funcao recebe um objeto como argumento. tambem eh possivel receber um vetor ou matriz.
function funcao5({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
const pessoa = {
    nome: "Joselho",
    sobrenome: "Amaral",
    idade: 26
};
funcao5(pessoa);


// nessa funcao tem o rest-operator, ele funciona para pegar todos os argumentos extras que estao sendo lancados.
function funcao6(operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if(operador === "+") acumulador += numero;
        if(operador === "-") acumulador -= numero;
        if(operador === "/") acumulador /= numero;
        if(operador === "*") acumulador *= numero;
    }
    console.log(acumulador);
}
funcao6("+",0,20,30,40,50,60);
