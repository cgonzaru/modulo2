'use strict';

// Referencia a los elementos de la página HTML
const item1 = document.querySelector('.list__item--1');
const item2 = document.querySelector('.list__item--2');
const item3 = document.querySelector('.list__item--3');
const btn = document.querySelector('.btn');

// Función del listener
function changeColor(event){
    // - Conseguir la clase que tengo que poner en el botón
    /* console.log('funciono'); */
    /* console.log(event.currentTarget.innerHTML); */
    const newClass = event.currentTarget.innerHTML;

    // - Quitar al botón las clases
    btn.classList.remove('red');
    btn.classList.remove('green');
    btn.classList.remove('lime');

    // - Poner la clase buena en el botón
    btn.classList.add(newClass);
}

// poner el listener en cada LI
item1.addEventListener('click', changeColor);
item2.addEventListener('click', changeColor);
item3.addEventListener('click', changeColor);
