// IIFE --> Immediately Invoked Function Expression
( function(idade, peso, altura) {
    const nome = "Alet";
    console.log(`${nome}, ${idade} anos, ${peso}kg e ${altura}m`);
})
(27, 75, 1.79);

// podemos criar uma funcao auto invocada e tambem adicionar argumentos a ela.