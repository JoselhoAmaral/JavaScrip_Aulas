// Object.defineProperty() - Object.defineProperties() 

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{ // permite definir o parametro de uma unica chave. 
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // Isso não permite alterar o valor de estoque.
        configurable: false // permite ou nao editar a chave. Como apagar a chave. 
    });

    Object.defineProperties(this, { // Esse permite definir o parametro de muitas chaves de uma unica vez.
        nome: {
            enumerable: true, 
            value: estoque, 
            writable: true,
            configurable: true
        },

        preco: {
            enumerable: true, 
            value: estoque, 
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Produto ('camiseta', 20, 3);
p1.estoque = 50; // por causa do writable: false nao eh possivel alterar o valor.
delete p1.estque; // por causa do configurable: false nao eh possivel apagar essa chave.
console.log(p1);
console.log(Object.keys(p1)); // Por causa do enumerable: true eh possivel ver a chave estoque.
