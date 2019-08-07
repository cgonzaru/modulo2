'use strict';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const ENDPOINT = `https://api/${input.value}`

function showSerie () {
    console.log('hola');

    fetch(ENDPOINT)
        .then(response => response.json)
        .then(data => data.results) {}
            result.innerHTML = results.name;
}

btn.addEventListener('click', showSerie);