//Списък
function arrayToList (arr) {
    var list = {value: null, rest: null};
    var varList = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: varList};
        varList = list;
    }
    return list;
}

function listToArray (list) {
    var arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend (value, list) {
    var varList = list;
    var list = {value: value, rest: list};
    for (var node = list; node; node = node.list) {
        list = {value: value, list: varList};
        varList = list;
    }
    return list;
}

function nth (list, number) {
    var myList = listToArray(list);
    var listLength = myList.length;
    if (listLength > number) {
        return myList[number];
    }
    else {
        return 'undefined';
    }
}
//console.log(arrayToList([1, 2, 3, 4]));
//console.log(listToArray(arrayToList([1, 2, 3, 4])));
// console.log(prepend(10, prepend(20, prepend(30, null))));
console.log(nth(arrayToList([10, 20, 30]), 3));