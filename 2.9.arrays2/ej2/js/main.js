'use strict';

const arr = [];

function getReversed100Numbers () {
    const newArrReverse = get100Numbers().reverse();
    console.log(newArrReverse);
    return newArrReverse;
}

function get100Numbers () {
    const newArr = [];
    for (let i=1; i<101; i++) {
        newArr.push(i);
    }
    return newArr;
}

getReversed100Numbers ();