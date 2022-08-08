
var currentImgIndex=1;
var imagens= [ //caminho das suas imgs aqui
'imagens/index/coracao.png',
'imagens/catalogo/coracao (2).png'
];

function trocar(){

  if(currentImgIndex == imagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("icone").src=imagens[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia
}

function trocar2(){

  if(currentImgIndex == imagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("icone2").src=imagens[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia
}

function trocar3(){

  if(currentImgIndex == imagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("icone3").src=imagens[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia
}

function trocar4(){

  if(currentImgIndex == imagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("icone4").src=imagens[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia
}


function trocar4(){

  if(currentImgIndex == imagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("icone4").src=imagens[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia
}


function trocar5(){

  if(currentImgIndex == imagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("icone5").src=imagens[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia
}


function trocar6(){

  if(currentImgIndex == imagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("icone6").src=imagens[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia
}


function trocar7(){

  if(currentImgIndex == imagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("icone7").src=imagens[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
  currentImgIndex++; // incrementa a nossa referencia
}

function trocar8(){

  if(currentImgIndex == imagens.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("icone8").src=imagens[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
  currentImgIndex++; // incrementa a nossa referencia
}


function mostrarBtn(id, visibilidade) {
  document.getElementById(id).style.display = visibilidade;
} 
