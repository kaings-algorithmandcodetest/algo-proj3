// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and
// a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than 
// or equal to the integer passed to the function. If there isn't one, return 0 instead.

// minSubArrayLen([2,3,1,2,4,3],7)                     // 2 --> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4],9)                       // 2 --> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)     // 1 --> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39)           // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55)           // 5
// minSubArrayLen([4,3,3,8,1,2,3],11)                  // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95)           // 0


function minSubArrayLen(nums, sum) {
    let start=0, end=0, total=0, minLen=Infinity;

    while(start<nums.length) {
        // console.log('BFR..... ', start, end, total, minLen);
        
        if(total<sum && end<nums.length) {
            total += nums[end];
            end++;
        } else if(total>=sum) {
            minLen = Math.min(minLen, end-start)
            total -= nums[start];
            start++;
        }

        console.log('AFT..... ', start, end, total, minLen);

        if(total<sum && end>=nums.length) {
            break;
        }

        
    }
    return minLen === Infinity ? 0 : minLen;
}


// const nums=[2,3,1,2,4,3], sum=7;                     // 2 --> because [4,3] is the smallest subarray
// const nums=[2,1,6,5,4], sum=9;                       // 2 --> because [5,4] is the smallest subarray
// const nums=[3,1,7,11,2,9,8,21,62,33,19], sum=52;     // 1 --> because [62] is greater than 52
// const nums=[1,4,16,22,5,7,8,9,10], sum=39;           // 3
// const nums=[1,4,16,22,5,7,8,9,10], sum=55;           // 5
// const nums=[4,3,3,8,1,2,3], sum=11;                  // 2
const nums=[1,4,16,22,5,7,8,9,10], sum=95;           // 0


console.log(`result..... ${minSubArrayLen(nums, sum)}`);




// function minSubArrayLen(nums, sum) {
//     let total = 0;
//     let start = 0;
//     let end = 0;
//     let minLen = Infinity;
   
//     while (start < nums.length) {
//       // if current window doesn't add up to the given sum then 
//           // move the window to right
//       if(total < sum && end < nums.length){
//         total += nums[end];
//               end++;
//       }
//       // if current window adds up to at least the sum given then
//           // we can shrink the window 
//       else if(total >= sum){
//         minLen = Math.min(minLen, end-start);
//               total -= nums[start];
//               start++;
//       } 
//       // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//       else {
//         break;
//       }
//     }
   
//     return minLen === Infinity ? 0 : minLen;
//   }