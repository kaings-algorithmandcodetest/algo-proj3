// given an array of integers and a number, write a function called maxSubarraySum, which finds 
// the maximum sum of a subarray with the length of the number passed to the function.
// note that a subarray must consist of consecutive elements from the original array. In the 
// first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2)   //  700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)   //  39
// maxSubarraySum([-3,4,0,-2,6,-1], 2)   //  5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)   //  5
// maxSubarraySum([2,3], 3)   //  null


function maxSubarraySum(arr, range) {
    let max = 0, tmp = 0;

    for(let i=0; i<range; i++) { max += arr[i]; }

    tmp = max;
    for(let i=0; (i+range)<=arr.length; i++) {
        console.log('res..... ', tmp, max);

        tmp += (arr[i+range] - arr[i]);

        if(tmp > max) { max = tmp; }
    }

    return max || null;
}


const arr=[100,200,300,400], range=2;   //  700
// const arr=[1,4,2,10,23,3,1,0,20], range=4;   //  39
// const arr=[-3,4,0,-2,6,-1], range=2;   //  5
// const arr=[3,-2,7,-4,1,-1,4,-2,1], range=2;   //  5
// const arr=[2,3], range=3;   //  null

console.log(`result..... ${maxSubarraySum(arr, range)}`);








// function maxSubarraySum(arr, num){
//     if (arr.length < num) return null;
 
//     let total = 0;
//     for (let i=0; i<num; i++){
//        total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//        currentTotal += arr[i] - arr[i-num];
//        total = Math.max(total, currentTotal);
//     }
//     return total;
// }