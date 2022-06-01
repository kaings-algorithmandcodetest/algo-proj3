function recursive_binary_search(_arrayOfNumbers, _targetNumber) {
    console.log(`${_arrayOfNumbers} ${_targetNumber}`, _arrayOfNumbers.length);


    let first = 0;
    let last = _arrayOfNumbers.length - 1;
    let mid = 0;

   
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