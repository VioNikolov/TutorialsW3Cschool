let shapeModule = (function shapeModule(){

    function Shape (color) {
        this._color = color;
    }

    Shape.prototype.toString = function() {
        return "Color: " + this._color;
    }

    let Circle = (function() {
        function Circle (centerX, centerY, radius, color) {
            this._centerX = centerX;
            this._centerY = centerX;
            this._radius = radius;
            Shape.call(this, color);
        }

        return Circle;
    })();   

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