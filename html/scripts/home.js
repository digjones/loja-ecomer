const search = document.getElementById("search");
const searchInput = document.querySelector(".searchInput");

// Mostrar o campo
search.addEventListener("click", () => {
  searchInput.classList.add("active");
  searchInput.style.display = "block";  
  searchInput.focus();
});

// Esconder ao clicar fora
document.addEventListener("click", (e) => {
  if (!search.contains(e.target)) {
    searchInput.classList.remove("active");
    setTimeout(() => {
      searchInput.style.display = "none";
    }, 300);
  }
});
       


        // Slideshow de Imagens com Fade

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Defina o Array de Imagens
    const images = [
        './img/canva1.jpg', // Primeira imagem (que você tinha)
        './img/canva2.jpg', // Substitua pelo caminho real
        './img/canva3.jpg', // Substitua pelo caminho real
        './img/canva4.jpg'  // Adicione quantas imagens quiser
    ];

    if (images.length < 2) {
        console.warn("É necessário pelo menos duas imagens para o slideshow.");
        return;
    }

    // 2. Seletores das Camadas
    const layer1 = document.querySelector('.layer-1');
    const layer2 = document.querySelector('.layer-2');
    
    // 3. Variáveis de Controle
    let activeLayer = layer1;
    let nextLayer = layer2;
    const intervalTime = 5000; // Tempo de exibição de cada imagem (5 segundos)
    let imageIndex = 1; // Começa na segunda imagem (índice 1) para a próxima troca

    // 4. Inicializa as camadas
    layer1.style.backgroundImage = `url('${images[0]}')`; // Carrega a primeira imagem na layer 1
    layer2.style.backgroundImage = `url('${images[1]}')`; // Carrega a segunda imagem na layer 2

    // 5. Função Principal de Troca
    function swapLayers() {
        // Incrementa o índice da imagem, voltando para 0 ao atingir o final do array
        imageIndex = (imageIndex + 1) % images.length;
        const nextImageURL = images[imageIndex];

        // Alterna entre a camada ativa e a próxima camada
        if (activeLayer === layer1) {
            activeLayer = layer2;
            nextLayer = layer1;
        } else {
            activeLayer = layer1;
            nextLayer = layer2;
        }

        // 1. Define a próxima imagem na camada que será ativada
        activeLayer.style.backgroundImage = `url('${nextImageURL}')`;

        // 2. Alterna as classes: isso dispara a transição de opacidade do CSS
        nextLayer.classList.remove('active');
        activeLayer.classList.add('active');
    }
    
    // 6. Inicia o Slideshow
    setInterval(swapLayers, intervalTime);
});

const video = document.getElementById('meuVideo');

function ativarTelaCheia(elemento) {
  if (elemento.requestFullscreen) {
    elemento.requestFullscreen();
  } else if (elemento.mozRequestFullScreen) { // Firefox
    elemento.mozRequestFullScreen();
  } else if (elemento.webkitRequestFullscreen) { // Chrome, Safari, Opera
    elemento.webkitRequestFullscreen();
  } else if (elemento.msRequestFullscreen) { // IE/Edge
    elemento.msRequestFullscreen();
  }
}

// Exemplo: Ativar tela cheia com um clique no vídeo
video.addEventListener('click', () => {
    ativarTelaCheia(video);
});

// Ou com um botão personalizado:
/* document.getElementById('botaoTelaCheia').addEventListener('click', () => {
    ativarTelaCheia(video);
});
*/


  document.addEventListener("DOMContentLoaded", function() {
    const target = document.querySelector("#video-section");
    const video = document.querySelector("#my-video");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
          obs.disconnect(); // para de observar; nunca mais pausa
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(target);
  });




