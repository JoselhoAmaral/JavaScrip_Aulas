// Metodo Uteis para Promises
// Promise.all, Promise.race, Promise.resolve, Promise.reject

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof (msg) !== 'string'){
            reject('BAD VALUE'); // verifica se eh string. Entao rejeita o valor e lanca no reject().
            return;
        }

        setTimeout(() => {
            resolve(msg); // este eh o retorno da Promise.
        }, tempo);
    });
}

// funcao que gera um tempo aleatorio
function rand (min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function baixaPagina() {
    const emCache = true;

    if(emCache){ // Caso emCache seja true
        //return Promise.resolve('Página em cache'); // esse resolve() cai no .then().
        return Promise.reject('Página em cache'); // esse reject() cai no .catch().
    }
    return espera('Baixado a página', 3000); // Caso emCache seja false
}

const promises = [
    //'Primeiro valor',
    espera('Promise 1', rand(1,5)),
    espera('Promise 2', rand(1,5)),
    espera('Promise 3', rand(1,5)),
    //espera(4500, 2500), // isso faz entrar no .reject().
   // 'Segundo valor'
];

/*
// Esse comando manda resolver todas as promises dentro de um array.
Promise.all(promises)
    .then( valor =>{
        console.log(valor);
    }).catch(erro => {
        console.log(erro);
    });
*/

/*
// Esse comando me entrega a primeira promise que foi resolvida.
Promise.race(promises)
    .then( valor =>{
        console.log(valor);
    }).catch(erro => {
        console.log(erro);
    });
*/

baixaPagina()
    .then( dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(erro => { // Todo o .reject() cai aqui
        console.log('Erro:', erro);
    });