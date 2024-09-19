// Fetch API(GET)

/* // Nao usaremos essa funcao porque usaremos o fetch().
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
*/

document.addEventListener('click', evento => {
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase();

    if(tag === 'a'){
        evento.preventDefault();
        carregaPagina(elemento);
    }
}); 

async function carregaPagina(elemento){
    

    try { //fetch com o async-await
        const href = elemento.getAttribute('href');
        const response = await fetch(href);

        if(resposta.status !== 200) throw new Error('Erro 404');

        const html = await response.text();
        carregaResultado(html);
    } catch (erro) {
        console.error(erro);
    }

    /*
    // fazendo o fecth com o then.
    fetch(href)
        .then(response => {
            if(resposta.status !== 200) throw new Error('Erro 404');
            return response.text();
        })
        .then(html => carregaResultado(html))
        .catch(erro => console.error(erro));
    */
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
