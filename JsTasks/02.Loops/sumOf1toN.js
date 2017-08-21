'use strict';


//Да се въведе число от потребителя и да се изведе сбора на всички числа между 1 и въведеното число.  

var num1 = parseInt(prompt('Enter number: '));
var sum = 0;

for (var i = 1; i <= num1; i++) {
    sum +=i;  
}

document.write(sum);