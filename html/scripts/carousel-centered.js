// Pega os elementos do DOM
const galleryCentered = document.querySelector('.gallery-centered');
const galleryContainer = document.querySelector('.gallery-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const itemLinks = document.querySelectorAll('.gallery-item-link'); // Note: Requer re-seleção se o DOM mudar

// Variáveis de estado
let currentIndex = 1; // Começa no item 2 (índice 1) para ter 3 visíveis
let isMoving = false; 

// Variáveis para o Swipe (Arrasto)
let startX = 0;
let endX = 0;
const threshold = 50; 

// 1. Função que calcula a posição de translação para centralizar o item (Sem alteração)
function calculateOffset() {
    // É crucial recalcular a largura de item e container aqui
    const containerWidth = galleryCentered.offsetWidth;
    const itemWidth = itemLinks[0].offsetWidth; 
    const itemMargin = parseFloat(window.getComputedStyle(itemLinks[0]).marginRight) * 2;
    
    const itemCenterPosition = (itemWidth + itemMargin) * currentIndex + (itemWidth / 2);
    const viewportCenter = containerWidth / 2;
    
    return viewportCenter - itemCenterPosition;
}

// 2. Função principal para aplicar a translação e o estilo
function updateCarousel(instant = false) {
    if (instant) {
        galleryContainer.style.transition = 'none';
    } else {
        galleryContainer.style.transition = 'transform 0.4s ease-in-out';
    }
    
    const offset = calculateOffset();
    galleryContainer.style.transform = `translateX(${offset}px)`;
    
    // ESTE É O BLOCO CHAVE PARA O DESTAQUE VISUAL:
    // Aplica a classe 'active' que você precisa para aumentar e clarear
    const items = Array.from(galleryContainer.children);
const centerIndex = Math.floor(items.length / 2);

items.forEach((item, index) => {
  item.classList.remove('active', 'left', 'right');

  if (index === centerIndex) {
    item.classList.add('active');
  } else if (index === centerIndex - 1) {
    item.classList.add('left');
  } else if (index === centerIndex + 1) {
    item.classList.add('right');
  }
});


    isMoving = true; 
    setTimeout(() => {
        galleryContainer.style.transition = 'transform 0.4s ease-in-out';
        isMoving = false;
    }, instant ? 10 : 400);
}


// 3. Lógica de Rotação Horária (Sentido Anterior/Prev)
function rotateClockwise() {
    if (isMoving) return;
    
    currentIndex = 2; // Move visualmente para centralizar o item 2 (antigo item 1)
    updateCarousel(false); 

    setTimeout(() => {
        const firstItem = galleryContainer.firstElementChild; 
        galleryContainer.appendChild(firstItem); 
        
        currentIndex = 1; // Retorna o índice lógico para o centro
        updateCarousel(true); // Reposiciona instantaneamente
        
    }, 400); 
}


// 4. Lógica de Rotação Anti-Horária (Sentido Próximo/Next)
function rotateCounterClockwise() {
    if (isMoving) return;
    
    currentIndex = 0; // Move visualmente para centralizar o item 0 (antigo item 2)
    updateCarousel(false); 

    setTimeout(() => {
        const lastItem = galleryContainer.lastElementChild; 
        galleryContainer.insertBefore(lastItem, galleryContainer.firstElementChild);
        
        currentIndex = 1; // Retorna o índice lógico para o centro
        updateCarousel(true); // Reposiciona instantaneamente
        
    }, 400); 
}

// --- RESTANTE DA LÓGICA (Botões e Swipe) ---

prevButton.addEventListener('click', rotateClockwise);
nextButton.addEventListener('click', rotateCounterClockwise);

// Lógica de SWIPE (omitida para brevidade, mas deve estar incluída)
galleryContainer.addEventListener('touchstart', (e) => {
    // ... (sua lógica de touchstart) ...
});
galleryContainer.addEventListener('touchend', (e) => {
    // ... (sua lógica de touchend chamando rotateClockwise/rotateCounterClockwise) ...
});

// Previne clique em links não ativos
    itemLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (isMoving || !link.classList.contains('active')) {
            e.preventDefault();
        }
    });
});

// Inicializa o carrossel na posição central correta
window.addEventListener('load', () => updateCarousel(true));
window.addEventListener('resize', () => updateCarousel(true));