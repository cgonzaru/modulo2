'use strict';

//elementos del HTML
const nombre = document.querySelector('.input');
const boton = document.querySelector('.boton');

// Función que recoge el valor del input y lo escribe por consola
function writeSomething () {
    const newName = nombre.value;
    console.log(`Hola, ${newName}`);
}

// Evento: al hacer click en el botón ejecuta writeSomething
boton.addEventListener('click', writeSomething);