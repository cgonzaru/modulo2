'use strict';

function sum (a, b) {
    return a + b;
}

console.log(sum (3, 4));

/* se puede declarar la función sin nombre
(propiedad de un objeto o para callback) */
let sum1 = function (a, b) {
    return a + b;
}

console.log(sum1 (2 , 2));
console.log(typeof(sum1));//tipo function

/* si en una función no indicamos un valor de retorno usando return, la función devolverá el valor undefined */
function sum2 (a, b) {
    const result = a + b;
}

const sumResult = console.log('ver resultado', sum2(3, 3)); //undefined
console.log(typeof(sum3)); //undefined

function sum3 (a, b, c) {
    return a + b + c;
}

const amount = sum3 (3, 56, 12);
console.log('Cantidad:', amount); 

const totalAges = sum3 (35, 26, 30); 
console.log('totalAges', totalAges); 

console.log('Exercises completed', sum3 (2,6,9)); 