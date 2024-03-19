var altura = 0;
var largura = 0;
var contadorCoracao = 1;
var tempo = 100;
var tempoMosquito = 2000;

var nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "easy") {
  tempoMosquito = 2000;
} else if (nivel === "normal") {
  tempoMosquito = 1500;
} else if (nivel === "hardcore") {
  tempoMosquito = 1000;
}

function ajustaTamanhoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo <= 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html?" + nivel;
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

function tamanhoRandomico() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (contadorCoracao > 3) {
      window.location.href = "gameOver.html?" + nivel;
    } else {
      document.getElementById("v" + contadorCoracao).src =
        "imagens/coracao_vazio.png";
      contadorCoracao++;
    }
  }

  ajustaTamanhoJogo();

  var posicaoY = Math.floor(Math.random() * altura) - 90;
  var posicaoX = Math.floor(Math.random() * largura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  var mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosquito0";
    case 1:
      return "mosquito1";
    case 2:
      return "mosquito2";
  }
}
function ladoAleatorio() {
  var classeLado = Math.floor(Math.random() * 2);
  switch (classeLado) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
