'use strict';

/* Ejemplo 1 */
//recogemos del html el elto sobre el que queremos escuchar eventos
const button = document.querySelector('.alert');

//A continuación, vamos a usar el método addEventListener de los elementos de HTML para escuchar eventos.


//Primero vamos a definir la función manejadora (handler)
// handler
function showAlert() {
    console.log('Alerta');
}

//luego registramos la función escuchadora (listener).
// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert);

/* Para pasar un callback como argumento, podemos utilizar el nombre de una función ya declarada (como vimos en el ejemplo anterior), o podemos declararla directamente */
/* const button = document.querySelector('.alert');
button.addEventListener('click', function showAlert() {
   console.log('alerta');
}); */

//o podemos ponerla como una arrow function
/* const button = document.querySelector('.alert');
button.addEventListener('click', () => console.log('alerta')); */