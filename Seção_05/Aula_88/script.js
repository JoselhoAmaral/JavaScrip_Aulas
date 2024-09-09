// forEach

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// O forEach como pode ver a baixo lembra o filter, map e reduce.
a1.forEach( (valor, indice, array) => {
    console.log(indice, valor, array);
});