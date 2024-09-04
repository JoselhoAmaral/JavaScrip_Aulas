 // factory function (fabrica de funcao)
 // Constructor function (funcao construtora) 
 function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() { // o this é para se referir a um objeto por vez.
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' '); // separa o nome por espacos e retorna um vetor
            this.nome = valor.shift(); // Pega o primeiro item do vetor valor
            this.sobrenome = valor.join(' '); // junta um vetor colocando itens lado a lado com um espaco entre eles.
        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        }, // O this se refere ao nome da "pessoa" p1 ou p2 que está executando o comando.
        altura,
        peso,
        get imc()  { //Isso eh um metodo e podemos transformar em atributo por meio do get = getter
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
 }

 const p1 = criaPessoa('Joselho', 'Amaral', 1.87, 78);
 const p2 = criaPessoa('Maria','Silva', 1.67, 58);
 console.log(p1.fala('falando sobre JS'));
 console.log(p2.fala('falando sobre JS'));
 console.log(p1.imc); // o .imc() era um metodo e passou a ser atributo .imc
 p1.nomeCompleto = 'Jonathan Oliveira Melo'; // Envia esse nome para o objeto p1 pelo metodo setter.
 console.log(p1.nome); // O metodo .nomeCompleto decompoe o nome em nome e sobrenome.
 console.log(p1.sobrenome);