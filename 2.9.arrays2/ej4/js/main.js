'use strict';

const tasks = [
    {
        name: 'Recoger setas en el campo',
        completed: true
    },
    {
        name: 'Comprar pilas',
        completed: true
    },
    {
        name: 'Poner una lavadora de blancos',
        completed: true
    },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false,
    },
];


/* console.log(tasks[1].name); */

// Mostrar una frase que muestre cuantas tareas hay
/* a) Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado. */

/* const list = `
<ul>
<li>
${tasks[1].name}
</li>
</ul>
`;

listContainer.innerHTML = list;

if (tasks[1].completed === true) {
    listContainer.classList.add('cross-out');
} 
*/

// Pintar todas las tareas en pantalla
/* b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada. */
// Tachar las ya realizadas
/* let res = '';

for (let item of tasks) {
    
    if (item.completed) {
        res += `<li class="tarea cross-out">${item.name}</li>`;
    } else {
        res += `<li class="tarea">${item.name}</li>`;        
    }
}

list.innerHTML += res; */


// Permitir marcar una tarea como completa o incompleta
/* c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:

- la tarea debe mostrarse como completada (tachada)

- debemos modificar su estado (propiedad completed) en el array tasks. */

const list = document.querySelector('.list');


let res = '';
let i = 0;

for (let item of tasks) {
    
    if (item.completed) {
        res += `<li class="tarea cross-out">${item.name}<input type="checkbox" class="check" value="check-${i}" checked></li>`;
        i++;
    } else {
        res += `<li class="tarea">${item.name}<input type="checkbox" class="check" value="check-${i}"></li>`;
        i++;
    }
}

list.innerHTML += res;

const check = document.querySelector('.check');

function active () {
    
}

check.addEventListenerAll('change', active);



/**************************************************************** */
/* let res = '';
for (let item of tasks) {
    res += `<li class="tarea cross-out">${item.name}</li>`;
    const tarea = document.querySelector('.tarea');
    if (item.completed === true) {
        tarea.classList.add('cross-out');
        console.log('hola');
    } else {
        tarea.classList.remove('cross-out');
        console.log('adios');
    }
} 
list.innerHTML += res; */

