// given a sorted array of integers, write a function called search, that accepts a value and returns
// the index where the value passed to the function is located. If the value is not found, return -1

// search([1,2,3,4,5,6], 4)    //  3
// search([1,2,3,4,5,6], 6)    //  5
// search([1,2,3,4,5,6], 11)    //  -1


function search(arr, searchVal) {
    let left=0, right=arr.length-1;
    let mid=0;

    while(left<=right) {
        mid = Math.floor((left+right)/2);

        if (arr[mid] === searchVal) { return mid }
        if (arr[mid] < searchVal) { left = ++mid }
        if (arr[mid] > searchVal) { right = --mid }

        console.log(`${left} - ${right}`);
    }

    return -1;
}


// const arr=[1,2,3,4,5,6], searchVal=4;
const arr=[1,2,3,4,5,6], searchVal=6;
// const arr=[1,2,3,4,5,6], searchVal=11;


console.log(`result..... ${search(arr, searchVal)}`);