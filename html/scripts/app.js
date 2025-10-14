







// --- MENU HAMBÚRGUER ---
const menuToggle = document.getElementById('menu-toggle');
const navBottom = document.getElementById('navBottom');
const menuItems = document.querySelectorAll('.menuItem');

menuToggle.addEventListener('click', () => {
  navBottom.classList.toggle('active');
  menuToggle.innerHTML = navBottom.classList.contains('active')
    ? '<i class="fas fa-times"></i>'  // vira "X"
    : '<i class="fas fa-bars"></i>';  // volta pro hambúrguer
});

// abre dropdown ao clicar no item no mobile
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      item.classList.toggle('active');
    }
  });
});
