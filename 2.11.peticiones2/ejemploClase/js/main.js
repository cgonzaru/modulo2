'use strict';

/* const num = 77;

localStorage.setItem('número', num);

const savedNum = localStorage.getItem('número');

console.log(savedNum); */

/* const nums = [1,5,77];

localStorage.setItem('números', JSON.stringify(nums));

let savedNum;
if (localStorage.getItem('números') != null) {
    savedNum = JSON.parse(localStorage.getItem('números'));
} else {
    savedNum = []; //pedirlos o inicializarlos ...
}

console.log(savedNum); */


/***************************************** */
/* const field = document.querySelector('.fieldName');
const title = document.querySelector('.title');


// si hay algo en el LS
if (localStorage.getItem('name') !== null){
    const lsSaved = localStorage.getItem('name');
    //ponlo en el campo
    field.value = lsSaved;
    //y en el h1
    title.innerHTML = lsSaved;
}


function doThis (event) {
    const value = event.currentTarget.value;
    title.innerHTML = value;
    localStorage.setItem('name', value);
}

field.addEventListener('keyup', doThis); */

/**************************************************** */


const criaturas = document.querySelector('.criaturas');

function getCriaturas () {
    const ENDPOINT = 'https://randomuser.me/api/?results=5';
    
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
        // lo vamos a guardar todo
        localStorage.setItem('criaturas', JSON.stringify(data)); //con el JSON.stringify lo pasamos a string

        /* let lis = '';
        for (const criatura of data.results) {
            lis += `
                <li class="criatura">
                    <img src="${criatura.picture.large}" alt="${criatura.name.first} ${criatura.name.last}">
                    <h2 class="criatura__name">${criatura.name.first} ${criatura.name.last} </h2>
            `;
        }
        criaturas.innerHTML = lis;*/
        
        paintCriaturas (data.results);
    });    
    
}

function paintCriaturas (arr) {
    let lis = '';
        for (const criatura of data.results) {
            lis += `
                <li class="criatura">
                    <img src="${criatura.picture.large}" alt="${criatura.name.first} ${criatura.name.last}">
                    <h2 class="criatura__name">${criatura.name.first} ${criatura.name.last} </h2>
            `;
        }
        criaturas.innerHTML = lis;
}

//si hay datos guardados:
if (localStorage.getItem('criaturas') !== null) {
    const savedData = JSON.parse(localStorage.getItem('criaturas'));
    console.log(savedData);
    paintCriaturas(savedData.results);
} else {
    //carga los datos
    
    //si no, haz la petición y guarda los datos
    getCriaturas();
}

