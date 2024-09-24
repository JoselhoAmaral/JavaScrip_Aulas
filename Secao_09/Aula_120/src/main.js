// Para instalar os pacotes do CSS use o comando no terminal:
// npm install styler-loader css-loader
import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function() { // funcao auto-invocada.
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();
