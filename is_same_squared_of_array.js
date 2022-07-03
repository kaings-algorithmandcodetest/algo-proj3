// Write a function called `same`, which accepts two arrays.
// The function should return true if every value in the 1st array has its corresponding value squared in the 2nd array
// same([1,2,3], [4,1,9])       // true
// same([1,2,3], [1,9])         // false
// same([1,2,1], [4,4,1])       // false (must be same frequency)
// same([1,2,1], [4,1,1])       // true

// O(n) approach
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let freqCountArr1 = {};
    let freqCountArr2 = {};

    for (let num of arr1) {
        freqCountArr1[num] = ++freqCountArr1[num] || 1;
    }
    for (let num of arr2) {
        freqCountArr2[num] = ++freqCountArr2[num] || 1;
    }

    for (let key in freqCountArr1) {
        if (!(key**2 in freqCountArr2)) {
            return false;
        }
        if (freqCountArr2[key**2] !== freqCountArr1[key]) {
            return false;
        }
    }

    console.log(freqCountArr1, freqCountArr2);

    return true;
}


// const arr1 = [1,1,3,4,2,5];
// const arr2 = [25,16,4,9,1,1];
const arr1 = [1,2,2,3,6,7,9,2,1,1,3,4,5,6,7,2,3,4,5,8,6,6,5];
const arr2 = [1,4,4,9,36,49,81,4,1,1,9,16,25,36,49,4,9,16,25,64,36,36,25];
// const arr1 = [1,2,2,3,6];
// const arr2 = [1,4,4,9,36];
// const arr1 = [2,1,3,4,1,5,6,8];
// const arr2 = [25,16,4,36,9,64,1,1];

console.log(`result..... ${same(arr1, arr2)}`);