<<<<<<< HEAD
function reverseArray (arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
=======
<<<<<<< HEAD
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
        return undefined;
    }
}
//console.log(arrayToList([1, 2, 3, 4]));
//console.log(listToArray(arrayToList([1, 2, 3, 4])));
// console.log(prepend(10, prepend(20, prepend(30, null))));
console.log(nth(arrayToList([10, 20, 30]), 3));
=======
let shapeModule = (function shapeModule(){
debugger
    function Shape (color) {
        this._color = color;
    }

    Shape.prototype.toString = function() {
        return this._color;
    }
>>>>>>> 4c50ebb9ddd41631f07fe9414e496a1abed605e1

function reverseArrayInPlace (arr) {
  
  if (arr.length % 2 === 0) {
    for (let i = 0; i <= (arr.length/2) - 1; i++) {
      let temp = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  else { 
    
    for (let i = 0; i <= (Math.floor(arr.length/2) - 1); i++) {
      let temp = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

}

<<<<<<< HEAD
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));
=======
let circle = new shapeModule.Circle(0, 0, 3, '#00FFFF');
console.log(circle.toString());
>>>>>>> 133db6ef176cd10cf6f460b6a0127bb2386e7777
>>>>>>> 4c50ebb9ddd41631f07fe9414e496a1abed605e1
