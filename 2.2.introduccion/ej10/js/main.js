'use strict';

const age = 24;
const año = 365;
const dia = 24;

/* console.log(`Tengo ${age * año * dia} horas de vida`); */

const hoursLife = (age * año * dia);
const life = document.querySelector ('.life');

life.innerHTML = `
<p>Tengo ${hoursLife} horas de vida.</p>
`;

