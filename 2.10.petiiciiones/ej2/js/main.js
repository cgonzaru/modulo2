'use strict';

const btn = document.querySelector(".js-dog");
const img = document.querySelector("img");

function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
        .then(response => response.json())
        .then(data => {
            img.src = data.message;
            img.alt = "Un perro";
        });
}

btn.addEventListener("click", getDogImage);