// Write a function called findLongestSubstring, which accepts a string and returns
// the length of the longest substring with all distinct characters.

// findLongestSubstring('')                     // 0
// findLongestSubstring('rithmschool')          // 7
// findLongestSubstring('thisisawesome')        // 6
// findLongestSubstring('thecatinthehat')       // 7
// findLongestSubstring('bbbbbb')               // 1
// findLongestSubstring('longestsubstring')     // 8
// findLongestSubstring('thisishowwedoit')      // 6


function findLongestSubstring(str) {
    let start=0;
    let end=0;
    let seen={};
    let longestLen=0;

    while(end<str.length) {
        // if end < str.length: check if char exists in track. 
        // -If not found, 
        //                  add to track.
        //                  move end++ 
        //                  longestLen = end-start
        // -If found, 
        //                  remove the found item of the track
        //                  move start++

        if(seen[str[end]] === undefined) {
            seen[str[end]] = 1;
            end++;
            longestLen = (longestLen < end-start) ? end-start : longestLen; 
        } else {
            delete seen[str[start]];
            start++;
        }

        console.log(longestLen, start, end, seen);
    }

    return longestLen;

}


// const str='';                     // 0
// const str='rithmschool';          // 7
// const str='thisisawesome';        // 6
// const str='thecatinthehat';       // 7
// const str='bbbbbb';               // 1
// const str='longestsubstring';     // 8
// const str='thisishowwedoit';      // 6
const str='computerscience';         // 10


console.log(`result..... ${findLongestSubstring(str)}`);




// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;
   
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (seen[char]) {
//         start = Math.max(start, seen[char]);
//       }
//       // index - beginning of substring + 1 (to include current in count)
//       longest = Math.max(longest, i - start + 1);
//       // store the index of the next char so as to not double count
//       seen[char] = i + 1;
//     }
//     return longest;
// }


