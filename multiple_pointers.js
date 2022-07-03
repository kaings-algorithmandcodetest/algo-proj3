// write a function called sumZero which accepts a sorted array of integers. The function should find the 1st pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist
// sumZero([-3,-2,-1,0,1,2,3]);     //  [-3,3]
// sumZero([-2,0,1,3]);     //  undefined
// sumZero([1,2,3]);     //  undefined


function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left],arr[right]];
        }
        if (arr[left] + arr[right] > 0) {
            right--;
        }
        if (arr[left] + arr[right] < 0) {
            left++;
        }
    }
    return undefined;
}


// const arr = [-3,-2,-1,0,1,2,3];
// const arr = [-2,0,1,3];
// const arr = [1,2,3];
const arr = [-4,-3,-2,-1,0,1,2,3,4,10];

console.log(`result..... ${sumZero(arr)}`);