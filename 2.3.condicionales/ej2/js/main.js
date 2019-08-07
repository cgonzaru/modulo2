'use strict';

const name1 = 'Cristina Tato';
const name2 = 'Cristina González';
const usuario = prompt ('Introduzca su nombre de usuario');
if (usuario === name1 || usuario === name2) {
    document.querySelector ('.title').innerHTML = `Bienvenida, ${usuario}`;
} 
else {
    document.querySelector ('.title').innerHTML = `Lo siento pero el usuario que has introducido no está registrado.`;
}