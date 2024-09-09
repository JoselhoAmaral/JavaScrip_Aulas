// Getters e Setters

function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{ // permite definir o parametro de uma unica chave. 
        enumerable: true, // mostra a chave
        // value: estoque, writable: false, // Para usar getter e setters nao ha sentido usar value e writable. 
        configurable: false, // permite ou nao editar a chave. Como apagar a chave.
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number'){
                throw new TypeError('Bad Value');
            }// Caso seja mandado um valor diferente de number.
            estoque = valor; //atribui valor a propriedade estoque.
        },
    });

}

const p1 = new Produto ('camiseta', 20, 3);
console.log(p1);
p1.estoque = 4;
console.log(p1.estoque); // Para ver o valor de estoque tem que executar dessa maneira.