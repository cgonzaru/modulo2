'use strict';

const field = document.querySelector('.user-query');
const btn = document.querySelector('.btn');
const container = document.querySelector('.results');

const api = 'https://swapi.co/api/people/?search=';


function getResult () {
    const query = field.nodeValue;

    const endpoint = api + query;

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            /* console.log(data.results.name) */
            container.innerHTML = '';
            let criaturas = '';
            for (const item of data.results){
                criaturas += `
                <li>
                    <h2>Name: ${item.name}</h2>
                    <div>Hair color: ${item.hair_color}</div>
                </li>
                `;
            }
            container.innerHTML += criaturas;
    });
}


btn.addEventListener('click', getResult);

