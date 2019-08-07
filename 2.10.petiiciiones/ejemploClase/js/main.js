'use strict';

const ENDPOINT = 'https://api.github.com/users/cgonzaru';
const user = document.querySelector('.user');

fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        console.log(data.name);
        console.log(data.avatar_url);

        user.innerHTML = `
            <h1 class="user__name">${data.name}</h1>
            <img class="user__avatar">${data.avatar_url}</img>
        `;

    })


    /* .then(res => { return res.json()}) */