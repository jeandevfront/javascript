var agora = new Date();
var hora = agora.getHours();
var res1 = document.querySelector('.res1'); // Seleciona a div com a classe "res1"
var res2 = document.querySelector('.res2'); // Seleciona a div com a classe "res2"
var body = document.body

function horaAtual() {
    var mensagem;
    var imagemSrc;

    if (hora >= 0 && hora < 6){
        mensagem = 'Agora são exatamente ' + hora + ' horas. Boa madrugada!';
        imagemSrc = 'images/boamadrugada.png';
        cordefundo = 'rgb(17, 21, 29)';
    } else if (hora < 12) {
        mensagem = 'Agora são exatamente ' + hora + ' horas. Bom dia!';
        imagemSrc = 'images/bomdia.jpg';
        cordefundo = 'rgb(230, 213, 120)';
    } else if (hora <= 18) {
        mensagem = 'Agora são exatamente ' + hora + ' horas. Boa tarde!';
        imagemSrc = 'images/boatarde.jpg';
        cordefundo = 'rgb(195, 106, 61)';
    } else if (hora > 18 && hora <= 24 ){
        mensagem = 'Agora são exatamente ' + hora + ' horas. Boa noite!';
        imagemSrc = 'images/boanoite.jpeg';
        cordefundo = 'rgb(6, 44, 121)';
    } else{
        mensagem = '[Error 404]';
        Image = '';
        cordefundo = '#fff';
    }
    res1.innerHTML = mensagem;
    res2.innerHTML = '<img src="' + imagemSrc + '" alt="'+ mensagem +'">';
    body.style.backgroundColor = cordefundo;
}

horaAtual(); 


