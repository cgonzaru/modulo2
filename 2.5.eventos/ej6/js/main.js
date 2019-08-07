'use strict';

const input = document.querySelector('.input');
const text = document.querySelector('.text');

/* function writeSomething () {
    const write = input.value;
    text.innerHTML = write;
} */


function writeSomething (event) {
    const write = event.currentTarget.value;
    text.innerHTML = write;
}

input.addEventListener('keyup', writeSomething);