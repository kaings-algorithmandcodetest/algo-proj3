function binary_search(_arrayOfNumbers, _targetNumber) {
    console.log(`${_arrayOfNumbers} ${_targetNumber}`, _arrayOfNumbers.length);


    let first = 0;
    let last = _arrayOfNumbers.length - 1;
    let mid = 0;

    while (first <= last) {
        mid = Math.floor((first + last) / 2);
        console.log(first, mid, last);

        if (_arrayOfNumbers[mid] === _targetNumber) {
            console.log('found!');
            return _arrayOfNumbers[mid];
        } else if (_arrayOfNumbers[mid] < _targetNumber) {
            first = mid + 1;
        } else if (_arrayOfNumbers[mid] > _targetNumber) {
            last = mid - 1;
        }
    }

    return 'NOT FOUND!!!!!';
}


var a = () => binary_search([1,3,4,5,6,7,8,9,16,19,20,23,24,26,28,30,32,33,35,36,57,69,78,89,99,120], 33);
console.log('result.... ',a());