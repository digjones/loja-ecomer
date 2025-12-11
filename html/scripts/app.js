// Abrir WhatsApp em nova aba com número pré-definido
document.getElementById('icone-whats').addEventListener('click', function(e) {
  e.preventDefault();
  const phoneNumber = '5511999999999'; // Substitua pelo número desejado com código do país
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, '_blank');
});

// Exemplo simples de mostrar/ocultar menu do usuário
document.getElementById('icone-user').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Aqui poderia abrir o menu do usuário.');
  // Ou implemente um dropdown/menu real aqui conforme sua necessidade
});

// Exemplo simples de abrir o carrinho de compras
document.getElementById('icone-cart').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Aqui poderia abrir o carrinho de compras.');
  // Ou redirecione para a página do carrinho: window.location.href = '/carrinho';
});




