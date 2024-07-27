function principal () {
    paragrafoData = document.querySelector('.paragrafo-data');

    function diaDaSemana(numeroSemana) {
        switch (numeroSemana){
            case 0: return 'Domingo';
            case 1: return 'Segunda-Feira';
            case 2: return 'Terça-Feira';
            case 3: return 'Quarta-Feira';
            case 4: return 'Quinta-Feira';
            case 5: return 'Sexta-Feira';
            case 6: return 'Sábado';
        }
    }

    function nomeDoMes(mes) {
        switch (mes){
            case 0: return 'Janeiro';
            case 1: return 'Fevereiro';
            case 2: return 'Março';
            case 3: return 'Abril';
            case 4: return 'Maio';
            case 5: return 'Junho';
            case 6: return 'Julho';
            case 7: return 'Agosto';
            case 8: return 'Setembro';
            case 9: return 'Outubro';
            case 10: return 'Novembro';
            case 11: return 'Dezembro';
        }
    }
    
    function criaDataAtual (){
        const data = new Date();
        const dia = data.getDate();
        const numeroSemana = data.getDay();
        const mes = data.getMonth();
        const ano = data.getFullYear();
        const hora = data.getHours();
        const minuto = data.getMinutes();

        const diaSemana = diaDaSemana(numeroSemana);
        const nomeMes = nomeDoMes(mes);

        return `<br><br>${diaSemana}, ${dia} de ${nomeMes} de ${ano}. Às ${hora}:${minuto}.`;
    }

    function apresentaDate (){
        const conteudoData = criaDataAtual();
        paragrafoData.innerHTML = `${conteudoData}`;
    }
    apresentaDate ();

}
principal();