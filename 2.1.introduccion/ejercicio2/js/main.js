'use strict';
/* al definir la constante cris como constante e intentar reasignarle valor nos dará un error en la consola, se soluciona cambiando const por let */
const cris = 'Calle río duero, 59';

document.querySelector('.address').innerHTML = cris;

cris = 'paseo de valdelasfuentes';

document.querySelector('.address').innerHTML = cris;