function solve (input) {

let arr = input[0].split('');

let leftArr = [],
    rightArr = [];

arr.forEach(function(element) {
    if (element === '(') {
        leftArr.push(element);
    }
    if (element === ')') {
        rightArr.push(element);
    }

});


if (leftArr.length === rightArr.length) {
    console.log('Correct');
}
else {
    console.log('Incorrect');
}

}


solve([ '((a+b)/5-d)' ]);