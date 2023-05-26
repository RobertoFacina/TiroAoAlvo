let velocidade = parseInt(prompt("Selecione a velocidade em milisegundos para jogar: "));

let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
let raio = 5;

pincel.fillStyle = 'lightgray';
pincel.fillRect(0,0,600,400);

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function desenhaCirculo(x,y,raio,cor){
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x,y,raio,0, 2* Math.PI);
    pincel.fill();
}

function desenhaAlvo(x,y,raio){
    desenhaCirculo(x,y,raio + 20,'red');
    desenhaCirculo(x,y,raio + 10,'white');
    desenhaCirculo(x,y,raio,'red');
}


function sorteiaPosicao(maximo){
    return Math.floor(Math.random() * maximo);
}
    
    let xAleatorio;
    let yAleatorio;

function atualizaPosicao(){
    limpaTela();
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    desenhaAlvo(xAleatorio,yAleatorio,raio);
}

setInterval(atualizaPosicao,velocidade);

function dispara(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if((x > xAleatorio - raio)
    && (x < xAleatorio + raio)
    && (y > yAleatorio - raio)
    && (y < yAleatorio + raio)) {
        desenhaCirculo(x,y,raio,'lightgreen');
    }
}

tela.onclick = dispara;
