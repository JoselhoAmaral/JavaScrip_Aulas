function* geradora1() { // funcao geradora eh declarada assim.
    // Codigo qualquer...
    yield 'Valor 1';
    // Codigo qualquer...
    yield 'Valor 2';
    // Codigo qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1); //mostra a funcao geradora
console.log(g1.next()); //mostra o resultado da funcao geradora que eh um objeto
console.log(g1.next().value); //mostra somente o valor, mas dessa vez faz um segundo acesso a funcao geradora
console.log(g1.next().value); //mostra somente o valor, mas dessa vez faz um terceiro acesso a funcao geradora
console.log(g1.next()); //Neste quarto acesso, nao tem valor para mostrar e por isso o done esta true.

function* geradora2() {
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}
console.log("Geradora 2");

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
console.log("Geradora 4");
const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

console.log("Geradora 5");

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };
//.................................

    yield function() {
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value; //recebe uma funcao
const func2 = g5.next().value; //recebe uma funcao

func1(); // Executa uma funcao
func2(); // Executa uma funcao