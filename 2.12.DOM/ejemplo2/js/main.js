'use strict';

const container = document.querySelector('.container');

//title.innerHTML = '<h1>Texto</h1>'

//creamos el elemento
const newTitle = document.createElement('h1');


//creamos el contenido
const newTitleContent = document.createTextNode('Texto');

//le añadimos el contenido a h1
newTitle.appendChild(newTitleContent);

//le añadimos todo al container 
container.appendChild(newTitle);


//una imagen
const newImg = document.createElement('img');
newImg.src = 'https://placehold.it/200x200';
newImg.classList.add('container__image');

container.appendChild(newImg);

//un ul
const newList = document.createElement('ul');
newList.classList.add('container__list');

for (let i=0; i<3; i++){
    const newLi = document.createElement('li');
    const newLiContent = document.createTextNode(`Elemento nº ${i+1}`);
    
    newLi.appendChild(newLiContent);
    newLi.setAttribute('data-index', i);
    newList.appendChild(newLi);

}

container.appendChild(newList);