// write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of
// the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the
// second string, without their order changing.

// isSubsequence('hello', 'hello world');     // true
// isSubsequence('sing', 'sting');     // true
// isSubsequence('abc', 'abracadabra');     // true
// isSubsequence('abc', 'acb');     // false (order matters)


function isSubsequence(str1, str2) {
    let idx=0;

    for(let i=0; i<str2.length; i++) {
        console.log('compare BFR..... ', idx, i);
        if(str1[idx] === str2[i]) {
            idx++;
        }
        console.log('compare AFT..... ', idx, i);
    }

    return idx === str1.length;
}



// const str1='hello', str2='hello world';
// const str1='sing', str2='sting';
// const str1='abc', str2='abracadabra';
const str1='abc', str2='acb';


console.log(`result..... ${isSubsequence(str1, str2)}`);