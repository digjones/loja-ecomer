
var radio = document.querySelector('.manual-btn')
let cont = 1;

// Seleciona o primeiro slide ao carregar
document.getElementById('radio1').checked = true;

// Troca automática de imagem a cada 3 segundos
setInterval(() => {
  proximaImg();
}, 3000);

function proximaImg() {
  cont++;

  // Reinicia ao chegar no último slide
  if (cont > 3) {
    cont = 1;
  }

  document.getElementById('radio' + cont).checked = true;
}
