'use strict';

const DEFAULT_AVATAR = 'http://placehold.it/300x300';

let userAvatar = 'http://www.fillmurray.com/300/300';


let avatar = document.querySelector('.user__avatar').src = (userAvatar || DEFAULT_AVATAR);


