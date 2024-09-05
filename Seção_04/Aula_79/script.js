// Funcoes recursivas sao funcoes que se repetem.
function recursiva(max) {
    if (max >= 10) return; // limitador
    console.log(max);
    max++; // incrementador
    recursiva(max); //chama a funcao
}
recursiva(-20); // Chamada inicial da funcao com argumento inicial.