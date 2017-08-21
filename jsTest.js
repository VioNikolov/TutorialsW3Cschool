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

    let Circle = function (centerX, centerY, radius, color) {
            this._centerX = centerX;
            this._centerY = centerX;
            this._radius = radius;
            Shape.call(this, color);
        };
  

    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;
    Circle.prototype.toString = function () {
        var result = `Circle: Center O(${this._centerX}, ${this._centerY}) radius: ${this._radius} color: ${Shape.prototype.toString.call(this)}`;
        return result;
    }

    return {
        Circle: Circle
    };


})();

let circle = new shapeModule.Circle(0, 0, 3, '#00FFFF');
console.log(circle.toString());
>>>>>>> 133db6ef176cd10cf6f460b6a0127bb2386e7777
