//const nomes = ['Eduardo', 'Maria', 'Joana'];
const nomes = new Array('Eduardo', 'Maria', 'Joana'); //Outro metodo de construcao de arrays
const novo = [...nomes]; // copia todos os dados de nomes para novo.
nomes[2] = 'João'; // mudanca de Joana para Joao
console.log(nomes);
delete nomes[2]; // Deletado o Joao.
console.log(nomes, nomes.length );
nomes.pop(); // remove o conteudo e o espaco do final.
console.log(nomes, nomes.length );
console.log(novo, novo.length ); // O .length mostrsa o tamanho do array.
const removido = novo.shift(); // O .shift() remove o elemento do inicio
console.log(novo, novo.length, removido);
novo.push(removido); // adiciona elementos no final do array
console.log(novo, novo.length, removido);

nomes.unshift('João'); // O .unshift adiciona elementos no inicio do array.
nomes.unshift('Wallace');
console.log(nomes, nomes.length );
const novo2 = nomes.slice(0, 2); // O .slice() pode criar um novo array fatiando o anterior. Nesse caso ele pega do zero ao um (2-1).
console.log(novo2);

const nomeString = 'Joselho da Silva Amaral';
const novo3 = nomeString.split(' '); //O .split() criou nesse caso um array retirando os espacos do nomeString.
console.log(novo3);
const novaString = novo3.join(' '); //O .join() converte um array em string unindo a partir de um parametro que deseje. Como espaco.
console.log(novaString);