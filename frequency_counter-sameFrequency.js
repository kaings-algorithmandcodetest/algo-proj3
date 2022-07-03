// write a function called sameFrequency. Given two positive integers, find out if the two numbers have
// the same frequency of digits. Your solution MUST have the following complexities:
// Time: O(n)

// sameFrequency(182,281)              // true
// sameFrequency(34,14)                // false
// sameFrequency(3589578,5879385)      // true
// sameFrequency(22,222)               // false


function sameFrequency(num1, num2) {
    const num1Obj = {}, num1Str = `${num1}`;
    const num2Obj = {}, num2Str = `${num2}`;

    for(let i=0; i<num1Str.length; i++) {
        num1Obj[num1Str[i]] = ++num1Obj[num1Str[i]] || 1;
    }

    for(let i=0; i<num2Str.length; i++) {
        num2Obj[num2Str[i]] = ++num2Obj[num2Str[i]] || 1;
    }

    for(let key in num1Obj) {
        if(!(key in num2Obj)) {
            return false;
        }
        if(num1Obj[key] !== num2Obj[key]) {
            return false;
        }
    }

    return true;
}



const num1=182, num2=281              // true
// const num1=34, num2=14                // false
// const num1=3589578, num2=5879385;      // true
// const num1=22, num2=222               // false


console.log(`result..... ${sameFrequency(num1, num2)}`);