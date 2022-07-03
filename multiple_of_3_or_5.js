// if we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000

function multipleOf3or5(upTo) {
    let idx3=0, idx5=0, ttl=0;

    if (typeof upTo !== 'number') {
        throw new Error('upTo must be a number!');
    }

    if (upTo <= 0) {
        return 0;
    }

    while (idx3<upTo || idx5<upTo) {
        if (idx3<upTo && (idx3%5 !== 0)) { ttl += idx3 }
        if (idx5<upTo) { ttl += idx5 }

        idx3 += 3;
        idx5 += 5;
    }

    return ttl;
}


console.log(`result..... ${multipleOf3or5(100)}`);