'use strict';


//Да се въведат от потребителя 2 числа. И да се изведат на екрана всички числа намиращи се между тях. 

var num1 = parseInt(prompt('Enter initial number: '));
var num2 = parseInt(prompt('Enter final number: '));

for (var i = num1; i <= num2; i++) {
    document.write(i + '<br>');
    
}