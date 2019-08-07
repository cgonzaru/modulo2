'use strict';

const ENDPOINT = "https://api.rand.fun/number/integer?max=100";

/* fetch(ENDPOINT)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.body.innerHTML = data.result;
    });
 */

// funciones flecha
/* fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => document.body.innerHTML = data.result); */

function getEmoji() {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML = data.result
        });
}
document.body.addEventListener("click", getEmoji);