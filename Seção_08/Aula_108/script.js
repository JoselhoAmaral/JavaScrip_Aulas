// Promises - codigo assincrono

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof (msg) !== 'string') reject('BAD VALUE'); // verifica se eh string. Entao rejeita o valor e lanca no reject().

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

espera('Frase 1', rand(1, 3)) // primeira promise
    .then(resposta => { // quando a promise dê certo, a resposta vai para o .then()
        console.log(resposta);
        return espera('Frase 2', rand(1, 3));
    })
    .then(resposta => { // segunda promise
        console.log(resposta);
        return espera(3543454, rand(1, 3));
    })
    .then(resposta => { // terceira promise
        console.log(resposta);
    })
    .catch(e => { // tudo que for cair no reject() vai para o .catch().
        console.log('Erro: ', e);
    });