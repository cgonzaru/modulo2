'use strict';

const browserName = 'Cristina Tato de la Torre';

const text = document.querySelector ('.text');

text.innerHTML = `
<p>El nombre de mi compañera es ${browserName}</p> 
<p>y está compuesto por ${browserName.length} caracteres. </p>
`;

