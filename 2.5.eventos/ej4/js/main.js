'use strict';

// Elementos del HTML
const container = document.querySelector('.container');

// Función (que cambie de color el fondo)
function changeColor (event) {
   //cuando la posición del scroll vertical supere o sea igua a 250px 
   if (window.scrollY >= 250) {
       container.classList.remove('container');
       container.classList.add('new-container');
   } else {
      container.classList.remove('new-container');
      container.classList.add('container');
   }
}

// Evento (al hacer scroll)
window.addEventListener('scroll', changeColor);