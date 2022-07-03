// implement a function called, areThereDuplicates which accepts a variable number of arguments, and 
// checks whether there are any duplicates among the arguments passed in. You can solve this using the 
// frequency counter pattern OR the multiple pointers pattern.

// areThereDuplicates(1,2,3)               //  false
// areThereDuplicates(1,2,2)               //  true
// areThereDuplicates('a','b','c','a')     //  true


function areThereDuplicates(...args) {
    const argsObj = {};
    
    console.log(args, args.length, args[1])

    for(let i=0; i<args.length; i++) {
        if(argsObj[args[i]] > 0) {
            console.log(argsObj);

            return true;
        } else {
            argsObj[args[i]] = 1;
        }
    }


    return false;
}


function isTest() {
    console.log(arguments);

    const a = new Set(arguments);
    console.log(a, `result..... ${a.size}`);

}

// const args=[1,2,3]               //  false
const args=[1,2,2]               //  true
// const args=['a','b','c','a']     //  true
// const args=[1,2,3,4,8,5,8,6,7,8] // true

// areThereDuplicates(args)
console.log(`result..... ${areThereDuplicates(...args)}`);

console.log(isTest(1,2,3,'a','b',23,4,5,6,7,8,9))