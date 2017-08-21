function isEven(n) {
    function test(current) {
     if (current < 0) {
         return "negative number";
     }
     else if (current > 1) {
         return test(current - 2);
     }
     else if (current == 1) {
         return false;
     }
     else {
         return true;
     }
    }
 return test(n);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??