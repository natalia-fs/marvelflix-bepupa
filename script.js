var btn_anterior = document.getElementById("anterior");
var btn_proximo = document.getElementById("proximo");

var imagens = document.getElementsByClassName("imagem");

var i = 0;

function mostrar_anterior(){
  i--;
  for (var img of imagens) {
    if (i == 0) { img.style.left = "0px" }
    if (i == 1) { img.style.left = "-225px" }
    if (i == 2) { img.style.left = "-450px" }
    if (i == 3) { img.style.left = "-675px" }
    if (i < 0) { i = 0 }
  }
}


 function mostrar_proximo(){
  i++;
  for (var img of imagens) {
    if (i == 0) { img.style.left = "0px" }
    if (i == 1) { img.style.left = "-225px" }
    if (i == 2) { img.style.left = "-450px" }
    if (i == 3) { img.style.left = "-675px" }
    if (i > 3) { i = 3 }
  }
}
 function mostrar_proximo2(){
  i++;
  for (var img of imagens) {
    if (i == 0) { img.style.left = "0px" }
    if (i == 1) { img.style.left = "-"+img.style.width; console.log('width: ',img) }
    if (i == 2) { img.style.left = "-450px" }
    if (i == 3) { img.style.left = "-675px" }
    if (i > 3) { i = 3 }
  }
}

btn_anterior.onclick = mostrar_anterior
btn_proximo.onclick = mostrar_proximo