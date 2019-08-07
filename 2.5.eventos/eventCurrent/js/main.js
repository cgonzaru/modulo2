'use strict';

const buttonElement = document.querySelector('.alert');


function handleButtonClick(event) {
  console.log(event.currentTarget);
}

buttonElement.addEventListener('click', handleButtonClick);