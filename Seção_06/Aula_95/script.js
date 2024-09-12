// Heranca
// Produto -> Aumento, desconto.
// Camiseta = cor, caneca = Material.
 
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.descontoPreco = function (quantia) {
    this.preco -= quantia;
};

Produto.prototype.aumentoPreco = function (quantia) {
    this.preco += quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); // Aqui ele pega nome e preco de Produto para nao precisar criar novamente.
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // Esse comando cria um objeto e copia os dados dos objeto Produto.prototype para dentro dele.
// O que foi feito agora foi passar a heranca de produto para Camiseta.
Camiseta.prototype.constructor = Camiseta; // Para o caso de criar um objeto em Camiseta, apareça como o construtor a Camiseta e não Produto.

const camiseta = new Camiseta('Regata', 7.50, 'Preta');
camiseta.aumentoPreco(10); // como pode ver, o objto prototype de Produto foi para Camiseta.
console.log(camiseta);

console.log("---------------------------------------------------------");
function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty( this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque;
        },
        set: function(valor) {  // So permite que o estoque receba numeros.
            if(typeof(valor) !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca Americana', 6.50, 'Porcelana', 5);
caneca.aumentoPreco(3.50);
console.log(caneca, caneca.estoque);
