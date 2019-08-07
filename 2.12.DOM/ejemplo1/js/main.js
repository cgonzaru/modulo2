'use strict';

const fieldName = document.querySelector('#field-name');
const fieldJob = document.querySelector('#field-job');
const name = document.querySelector('.name');
const job = document.querySelector('.job');


function writeMe () {
    const guilty = event.currentTarget;
    const value = guilty.value;

    /* if (guilty.id === 'field-name'){
        name.innerHTML = value;
    } else {
        job.innerHTML = value;
    } */

    const selector = guilty.getAttribute('data-target');
    const target = document.querySelector(selector);

    target.innerHTML = value;


}

fieldName.addEventListener('keyup', writeMe);
fieldJob.addEventListener('keyup', writeMe);
