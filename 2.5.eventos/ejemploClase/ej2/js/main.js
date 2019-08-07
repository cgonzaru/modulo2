'use strict';

//elementos del HTML
const title = document.querySelector('.title');
const btn = document.querySelector('.button');
const paragraph = document.querySelector('.paragraph');



function writeSomething (event) { //recogemos el evento cuando el navegador llama a la función
    /* console.log(event.currentTarget);
    const text = btn.innerHTML; */
    const text = event.currentTarget.innerHTML;
    title.innerHTML = text;
}

btn.addEventListener('click', writeSomething);
paragraph.addEventListener('click', writeSomething);





/* //*
function paco () {
    console.log('yay');
}

//*  Este método queda más claro
btn.addEventListener('click', paco); */

/* //función anónima 
btn.addEventListener('click', function() {
    console.log('click');
});

//función anónima flecha
btn.addEventListener('click', () => {
    console.log('click');
}); */
