class Text {
  constructor (content) {
    this._content = content;
  }

  get content () {
    return this._content;
  }
}

class Image {
  constructor () {

  }
}

function makeClickable(base) {
   class Ext extends base {
    constructor (link, ...args) {
      super(...args);
      this._link = link;
    }

    get click() {
      return `Going to ${this._link}`;
    }
  }
  return Ext;
}

// class ClickableText extends Text {
//   constructor(link, ...args) {
//     super(...args);
//     this._link = link;
//   }

//   click() {
//     console.log(`Going to ${this._link}`);
//   }
// }



//const el = new ClickableText('google.bg', 'Go somewhere');
const clickMe = makeClickable(Text);

console.log(clickMe.click)






// class Animal {
//   constructor (name) {
//     this._name = name;
//   }

//   sayName() {
//     return "The name of the animal is: " + this._name;
//   }

//   eat() {
//     return "Eating...";
//   }

//   get name () {
//     return this._name;
//   }
// }


// class Dog extends Animal {
//   bark() {
//     return "Barked by " + this._name;
//   }
// }

// let doggo = new Dog("Bobi");
// console.log(doggo);

// ======================================

// class Point2D {
//   constructor (x, y) {
//     this._x = x;
//     this._y = y;
//   }

//   static get ZERO () {
//     return new Point2D(0, 0);
//   }

//   static getDistance (pointA, pointB) {
//     const sqrtDistance = 
//     (pointA._x - pointB._x) * (pointA._x - pointB._x) + 
//     (pointA._y - pointB._y) * (pointA._y - pointB._y);
//     return Math.sqrt(sqrtDistance);
//   } 

//   distanceTo(otherPoint) {
//     return Point2D.getDistance(this, otherPoint);
//   }

//   get distanceToCenter () {
//     return Point2D.getDistance(this, Point2D.ZERO);
//   }

// }

// let p1 = new Point2D(7, 3);
// console.log(p1);
// let p2 = new Point2D(-6, 4);
// console.log(Point2D.getDistance(p1, p2)); 
// console.log(p1.distanceTo(p2));
// console.log(p1.distanceToCenter);
// console.log(p2.distanceToCenter);

// =============================

// const VALIDATOR = {
//   validateAge: function (age) {
//     if (age < 0) {
//       throw new Error("Cat is dead");
//     }
//   }
// }

// class Cat {
//   constructor (name, age) {
//     this._name = name;
//     this._isDeaf = false;
//     this.age = age;
//   }

//   meow() {
//     if(this._isDeaf) {
//       return;
//     }
//     console.log(`${this._name} says ${Cat.whatDoesTheCatSay}`)
//   }

//   silence() {
//     this._isDeaf = true;
//   }

//   unsilence() {
//     this._isDeaf = false;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(newAge) {
//     VALIDATOR.validateAge(newAge);
//     this._age = newAge;
//   }

//   static get whatDoesTheCatSay() {
//     return 'meow';
//   }
// }

// const kotka = new Cat('minka', 4);
// kotka.meow();
// console.log(Cat.whatDoesTheCatSay);
// kotka.silence();
// kotka.meow();
// kotka.meow();
// kotka.unsilence();
// kotka.meow();