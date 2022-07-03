// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5], 2)       // 10
// maxSubarraySum([1,2,5,2,8,1,5], 4)       // 17
// maxSubarraySum([4,2,1,6], 1)       // 6
// maxSubarraySum([4,2,1,6,2], 4)       // 13
// maxSubarraySum([], 4)       // null


function maxSubarraySum(arr, range) {
    let maxSum = 0;
    let tmp = 0;

    for(let i=0; i<range; i++) {
        maxSum += arr[i];
    }
    
    tmp = maxSum;

    console.log('init..... ', maxSum);

    for(let i=0; (i+range)<arr.length; i++) {
        tmp += (arr[i+range] - arr[i]);
        if(tmp > maxSum) {
            maxSum = tmp;
        }

        console.log(`i: ${i} - ${arr[i]} | (i+range): ${i+range} - ${arr[i+range]} | maxSum: ${maxSum} | tmp: ${tmp}`);
    }

    console.log('result..... ', maxSum);
}


// var arr = [1,2,5,2,8,1,5], range = 2;
// var arr = [1,2,5,2,8,1,5], range = 4;
// var arr = [4,2,1,6], range = 1;
// var arr = [4,2,1,6,2], range = 4;
// var arr =[], range = 4;
// var arr = [1,2,5,2,8,1,5,2,4,6,7,8,7,9,0,2,3,4,4,6,7,8,10,8,23,4,25,12,22,18], range = 5;
// var arr = [6,7,8,7,9,0,2,3,4,4,6,7,8,10,8], range = 5;
var arr = [2,6,9,2,1,8,5,6,3], range = 3;


maxSubarraySum(arr, range);