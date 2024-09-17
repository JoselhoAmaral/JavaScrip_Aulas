// Promises - codigo assincrono

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

function rand (min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

espera('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return espera('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return espera('Frase 3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch();