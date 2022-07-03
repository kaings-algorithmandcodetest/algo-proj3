// given 2 strings, write a function to determine if the 2nd string is an anagram of the 1st. An anagram is a word, phrase, or name formed by
// rearranging the letter of another, such as cinema, formed from iceman.
// validAnagram('', '')     // true
// validAnagram('aaz', 'zza')     // false
// validAnagram('anagram', 'nagaram')     // true
// validAnagram('rat', 'car')     // false
// validAnagram('awesome', 'awesom')     // false
// validAnagram('qwerty', 'qeywrt')     // true
// validAnagram('texttwisttime', 'timetwisttext')     // true


function validAnagram(str1, str2) {
    let str1Obj = {};
    let str2Obj = {};

    if (str1.length !== str2.length) {
        return false;
    }

    for (let c of str1) {
        str1Obj[c] = ++str1Obj[c] || 1;
    }
    for (let c of str2) {
        str2Obj[c] = ++str2Obj[c] || 1;
    }

    for (let key in str1Obj) {
        if (!(key in str2Obj)) {
            return false;
        }
        if (str2Obj[key] !== str1Obj[key]) {
            return false;
        }
    }

    return true;
}


// str1='', str2= '';    // true
// str1='aaz', str2='zza';     // false
// str1='anagram', str2='nagaram';     // true
// str1='rat', str2='car';     // false
// str1='awesome', str2='awesom';     // false
// str1='qwerty', str2='qeywrt';     // true
str1='texttwisttime', str2='timetwisttext';     // true

console.log(`${validAnagram(str1, str2)}`);