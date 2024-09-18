// XMLHttpRequest (get) +  Promise

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', evento => {
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase();

    if(tag === 'a'){
        evento.preventDefault();
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento){
    const href = elemento.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    };

    /* //pode ser feito dessa forma
    request(objConfig).then(response => {
        carregaResultado(response);

    }).catch(error => console.log(error));
    */

    // ou dessa forma, mas eh necessario colocar async no começo da funcao
    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(error) {
        console.log(error);
    }


}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}