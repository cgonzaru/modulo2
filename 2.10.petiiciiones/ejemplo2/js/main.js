'use strict';

const btn = document.querySelector(".js-dog");

function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector("img");
            img.src = data.message;
            img.alt = "Un perro";
        });
}

btn.addEventListener("click", getDogImage);