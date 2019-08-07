'use strict';

//elementos del HTML
const texto = document.querySelector('.text');
const btn = document.querySelector('.btn');

//función
function writeSomething () {
    const newText = 'Mi primer click, ¡ole yo y la mujer que me parió!';
    texto.innerHTML = newText;
}

//evento
btn.addEventListener('click', writeSomething);