'use strict';

function get100Numbers () {
    const newArr = [];

    for (let i=1; i<101; i++) {
        newArr.push(i);
    }
    console.log(newArr);
    return newArr;
}

get100Numbers();