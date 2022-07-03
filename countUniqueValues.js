// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted

// countUniqueValues([1,1,1,1,1,2]);    // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);    // 7
// countUniqueValues([]);    // 0
// countUniqueValues([-2,-1,-1,0,1]);    // 4


// pointer 1 & 2 move by +1
function countUniqueValues(arr) {
    let idx1 = 0;
    let idx2 = 1;
    let count = 0;

    if (arr.length > 0) {
        count++;
    }

    while (idx2 < arr.length) {
        if(arr[idx1] !== arr[idx2]) {
            count++;
        }
        idx1++;
        idx2++;
    }

    return count;
}


function countUniqueValues2(arr) {
    let idx = 0;

    console.log(`BFR..... ${arr}`);

    for (let i=1; i<arr.length; i++) {
        if (arr[idx] !== arr[i]) {
            idx++;
            arr[idx] = arr[i];
        }
    }

    console.log(`AFT..... ${arr}`);

    return idx + 1;
}



// const arr = [1,1,1,1,1,2];
const arr = [1,2,3,4,4,4,7,7,12,12,13];
// const arr = [];
// const arr = [-2,-1,-1,0,1];


console.log(`result..... ${countUniqueValues2(arr)}`);