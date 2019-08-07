'use strict';

const button = document.querySelector('.btn');

function changeColor (event) {
    const newclass = event.currentTarget.innerHTML;
    console.log(newclass);
	if(button.classList.contains(newclass)) {
        button.classList.toggle('red');
	}else{
        button.classList.toggle('green');
	}
}


button.addEventListener('click', changeColor);