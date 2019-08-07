'use strict';

const ENDPOINT = 'https://swapi.co/api/people/?search=skywalker';
const results = document.querySelector('.results');
const paco = document.querySelector('.paco');

fetch(ENDPOINT)
/* .then(res => { return res.json()}) */
    .then(res => res.json())
    .then(data => {
        console.log(data);

        console.log(`Hay ${data.results.length} resultados`);
        
        let people = ``;

        for (const result of data.results) {
            console.log(result.name);
            people += `<li class="result__item">${result.name}</li>`;
        }
        console.log(people);
        results.innerHTML = people;
    })

