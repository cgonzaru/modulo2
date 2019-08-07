'use strict';

// Elemento que recoge el evento
const teclaR = document.querySelector('.sin-color');

// Función para cambiar el color de fondo 
function changeColor () {

    if (event.key === 'r') { //si la tecla es la r add .red
        teclaR.classList.remove('purple');
        teclaR.classList.add('red');
    } else if (event.key === 'm') { //si la tecla es la m add .purple
        teclaR.classList.remove('red');
        teclaR.classList.add('purple');
    } else {
        teclaR.classList.remove('red');
        teclaR.classList.remove('purple');
    }
}

// Evento 
teclaR.addEventListener('keyup', changeColor);