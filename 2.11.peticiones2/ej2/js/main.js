'use strict';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const listado = document.querySelector('.listado');
/* const form = ducument.querySelector('.form'); */

const ENDPOINT = `https://swapi.co/api/people/?search=${input.value}`;

function showListStarWars () {
   /*  event.preventDefault(); */
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            let result = '';
            for (let item of data.results) {
                console.log(item.name);
                console.log(item.gender);
                result += `<ul><li>Nombre: ${item.name}</li><li>Género: ${item.gender}</li></ul>`;
            }

            listado.innerHTML = result;
    });
}

/* form.addEventListener('submit', showListStarWars); */
btn.addEventListener('click', showListStarWars);

