// Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.
// Given a string containing just the characters ‘(’, ‘)’, ‘{’, ‘}’, ‘[’ and ‘]’, determine if the input string is valid.
// An input string is valid if:
// - Open brackets are closed by the same type of brackets.
// - Open brackets are closed in the correct order.
// - Note
// - Note that an empty string is also considered valid.
// Example:
// Input: “((()))”
// Output: True
// Input: “[()]{}”
// Output: True
// Input: “({[)]”
// Output: False
// Input: "({)}"
// Output: False


function validateBrackets(str) {
    const isSeen = [];
    let latestSeen = 0;

    for(let i=0; i<str.length; i++) {
        latestSeen = isSeen.length-1;

        if(str[i]==="[" || str[i]==="{" || str[i]==="(") {
            isSeen.push(str[i]);
            continue;
        }
        
        if(str[i]==="]" && isSeen[latestSeen]!=="[") return false;
        if(str[i]==="}" && isSeen[latestSeen]!=="{") return false;
        if(str[i]===")" && isSeen[latestSeen]!=="(") return false;

        console.log("BFR..... ", isSeen);

        isSeen.pop();

        console.log("AFT..... ", isSeen);
    }

    return true;
}





// const str='((()))';      //  true
// const str='[()]{}';      //  true
// const str='({[)]';       //  false
// const str='({)}';        //  false
// const str='{[[[{)]]]}((({})))';     // false
// const str='{[[[()]]]}((({})))';     // true
// const str='{{(())}}[({})][]()(((()))){()}';     //  true
const str='{[(({}))]([])}';      // true


console.log(`result..... ${validateBrackets(str)}`);