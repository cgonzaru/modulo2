'use strict';

// FUNCIONES NO-FLECHA
// Función con nombre
function sum1 (num1, num2) {
    return num1 + num2;
}

/*mete la función en una variable*/
// Función anónima
const sum2 = function (num1, num2) {
    return num1 + num2;
}

// Funciones flecha :)
const sum3 = (num1, num2) => {
    return num1 + num2;
}

//es lo mismo que lo de arriba pero se pueden quitar los corchetes y el return. Sólo si tiene una sentencia 
const sum4 = (num1, num2) => num1 + num2;


/* const paco = (event) => {
    fdsakjdfñ
} */