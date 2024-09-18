// Async / Await

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

/*
// metodo de promises que pode ser bem longo se tiver muitas promises.
espera('Fase 1', rand(1, 3))
    .then( valor => {
        console.log(valor);
        return espera('Fase 2', rand(1, 3));
    })
    .then( valor => {
        console.log(valor);
        return espera('Fase 3', rand(1, 3));
    })
    .then( valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });
*/

//Esse eh outro metodo para esperar que funcoes resolver seus problemas. Similar a Promise.
async function executa() {// o await so funcionar em funcoes que comecem com async.
    try{
        const fase1 = await espera('Fase 1', rand(1, 3)); // O await espera que a funcao resolva o problema e so entao  conclui para criar a variavel fase1.
        console.log(fase1);
        const fase2 = await espera('Fase 2', rand(1, 3));
        console.log(fase2);
        const fase3 = await espera(564, rand(1, 3)); // dara erro porque nao pode enviar numero
        console.log(fase3);
    }catch(erro) { // O try-catch funciona para tratar erro e pode ser usando em async-await
        console.log('Erro:', erro);
    }
}
executa();

/*
As promessas tem os seguintes estagios:
pending - pendente de ser resolvida.
fullfilled - concluida
reject - rejeitada
*/