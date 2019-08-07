'use strict';

const text = document.querySelector('.title');
const result = document.querySelector('.result');


function write (event) {
    const value = event.currentTarget.value;
    result.innerHTML = value;
}

text.addEventListener('keyup', write);