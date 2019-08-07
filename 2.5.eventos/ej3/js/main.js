'use strict';

// Elementos del HTML
const text = document.querySelector('.text');
const insert = document.querySelector('.insert');


// Funciones (crear párrafo nuevon en el HTML)
function writeSomething () {
    const newText = `
    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio expedita doloribus facere? Modi, non! Corporis fugiat veniam mollitia consectetur sed ipsam, modi repellat, reprehenderit et fugit ab quae dignissimos.</p>
    `;
    insert.innerHTML = newText;

}

// Eventos (poner el ratón sobre el párrafo)
text.addEventListener('mouseover', writeSomething);
