// Polimorfismo. - Fazer métodos se comportarem de maneira diferente em subclasses diferentes.

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Metodos
Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
  
    this.saldo -= valor;
    this.verSaldo();
};
  
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
  
Conta.prototype.verSaldo = function() {
    console.log(
      `Ag/c: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}` // Mostra um saldo com duas casas decimais.
    );
};

// Subclasse - Conta Corrente
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
// Atribuindo metodos de Conta em CC e mudando o nome do objeto prototype de volta para CC
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// Criando e modificando metodo sacar() para funcionar de maneira diferente em conta CC. Ou seja, o polimorfismo.
CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) { // por causa do limite, eh possivel sacar mais.
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

// Subclasse - Conta Poupanca
function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo); // puxa as variaveis de Conta para CP.
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

// Criacao de objetos e utilizacao de metodos.
const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

