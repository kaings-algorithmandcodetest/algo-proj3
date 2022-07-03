// Write a function which takes in a string and returns counts of each character in the string.

function countCharInAString(_aString) {
    let charObj = {};

    for(let i=0; i<_aString.length; i++) {
        const c = _aString[i];
        if(charObj[c] === undefined || charObj[c] <= 0) {   // or alternatively... charObj[c] = ++charObj[c] || 1;
            charObj[c] = 1;
        } else {
            charObj[c] += 1;
        }
    }

    return charObj;

}



var test = countCharInAString("test");