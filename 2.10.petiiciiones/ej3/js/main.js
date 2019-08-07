'use strict';

const btn = document.querySelector('.js__btn');
let name = document.querySelector('.name');
let photo = document.querySelector('.photo');
let repo = document.querySelector('.repo');
const input = document.querySelector('.input');

function getUserName () {
    return name = input.value;
}

function getUserGitHub() {
    let nameUser = getUserName();
    /* let gitHub  = "https://api.github.com/users/" + `${nameUser}`;
    console.log( gitHub) */
    fetch(`https://api.github.com/users/${input.value}`)
        .then(response => response.json())
        .then(data => {
            name.innerHTML = data.name;
            photo.src = data.avatar_url;
            photo.alt = data.login;
            repo.innerHTML = data.public_repos;
        });
}


input.addEventListener('keyup', getUserName);
btn.addEventListener('click', getUserGitHub);