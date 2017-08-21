function solve(input) {

let obj = {};
let arr = [];

    for (var i = 0; i < input.length; i++) {
        if(!(obj.hasOwnProperty(input[i]))) {
            obj[input[i]] = true;
        }
    }

    arr = Object.keys(obj);

    arr.sort(function(x, y) {
        if (x.length != y.length ) {
            return x.length - y.length;
        }
        else {
            return x.localeCompare(y);
        }
    });

    for (let el of arr) {
        console.log(el);
    }
}

solve([
'zzzzzz',
'Kutcher',
'Ariel',
'Lilly',
'Kutcher',
'xxxxxx',
'oooooo',
'Aizen',
'Bill',
'Bra'
]

);