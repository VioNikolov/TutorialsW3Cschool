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