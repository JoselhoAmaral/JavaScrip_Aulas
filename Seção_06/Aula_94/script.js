// Manipulando Prototypes

const objA = {
    chaveA: 'A'
}; // __proto__: Object.prototype

const objB = {
    chaveB: 'B'
}; // __proto__: objA

Object.setPrototypeOf(objB, objA);
// Isso faz com que o prototype do objB seja o objA.

console.log(objB.chaveA);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumentoPreco = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
};

const p1 = new Produto('camiseta', 50);
p1.desconto(50); // passa de 50 para 25.
p1.aumentoPreco(100); // passa de 25 para 50.
console.log(p1);

console.log('-----------------------------------------------------------');

const p2 = {nome: 'caneca', preco: 15};
console.log(p2);
Object.setPrototypeOf(p2, Produto.prototype); 
// com esse comando, eu coloquei os metodos de produto em p2.

p2.aumentoPreco(20);

console.log(p2);

console.log('-----------------------------------------------------------');

const p3 = Object.create(Produto.prototype, { // esse comando me permite ja criar o novo objeto com o prototype do produto.
    nome: {
        writable: true,
        value: 'prato',
        enumerable: true,
        configurable: true
    },
    preco: {
        writable: true,
        value: 16,
        enumerable: true,
        configurable: true
    },
});
console.log(p3);
p3.aumentoPreco(25);
console.log(p3);
