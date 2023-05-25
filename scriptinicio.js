var menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('mouseenter', function() {
  menuIzquierdo.classList.add('menu-izquierdo-abierto');
});

menuIzquierdo.addEventListener('mouseleave', function() {
  menuIzquierdo.classList.remove('menu-izquierdo-abierto');
});

function activarModoOscuro() {
  document.body.classList.toggle('modo-oscuro');
}
