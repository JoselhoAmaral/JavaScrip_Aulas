//Metodo Splice
//                0        1        2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes);
// .pop()
const removidos = nomes.splice(4,1);
console.log(nomes, removidos);
// O .splice retornar os itens retirados, mas so que eh em array.

//adicionar
nomes.splice(3,0,'Luiz'); // .splice (onde adicionar, aidcionar ou remover - 0 ou 1 -, elemento que vai adicionar)
console.log(nomes);

// .push()
nomes.splice(nomes.length, 0, 'Otavio', 'Miranda');
console.log(nomes);

// Unshift
nomes.splice(0,0, 'Darios');
console.log(nomes);