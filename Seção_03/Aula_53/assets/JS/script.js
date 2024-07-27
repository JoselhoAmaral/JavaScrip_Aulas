const addTags = document.querySelector('.add-tags');

const elementos = [
    {tag: 'p', texto: 'Primeira Frase'},
    {tag: 'div', texto: 'Segunda Frase'},
    {tag: 'footer', texto: 'Terceira Frase'},
    {tag: 'section', texto: 'Quarta Frase'} 
]; //Vetor com objetos

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]; //Método de desestruturação.
    let criaTag = document.createElement(tag); //Cria uma tag a partir da tag informada na variável tag.
    criaTag.innerText = texto; //Adiciona o texto da variavel texto na tag que acabou de ser criada.
    addTags.appendChild(criaTag); //Cria realmente a tag. Seria como alocar a tag no lugar correto que é dentro da div de classe "add-tags".
}
