var btn_anterior = document.getElementById("anterior");
var btn_proximo = document.getElementById("proximo");

var imagens = document.getElementsByClassName("imagem");

var i = 0;

btn_anterior.onclick = () => {
  i--;
  for (var img of imagens) {
    if (i == 0) { img.style.left = "0px" }
    if (i == 1) { img.style.left = "-225px" }
    if (i == 2) { img.style.left = "-450px" }
    if (i == 3) { img.style.left = "-675px" }
    if (i < 0) { i = 0 }
  }
}

btn_proximo.onclick = () => {
  i++;
  for (var img of imagens) {
    if (i == 0) { img.style.left = "0px" }
    if (i == 1) { img.style.left = "-225px" }
    if (i == 2) { img.style.left = "-450px" }
    if (i == 3) { img.style.left = "-675px" }
    if (i > 3) { i = 3 }
  }
}