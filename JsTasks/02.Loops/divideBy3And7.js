'use strict';


//Да се изведат на екрана всички числа от 1 до N, които се делят на 3 и 7 едновременно. 

var num1 = parseInt(prompt('Enter number: '));


for (var i = 1; i <= num1; i++) {

    if((i % 3 === 0) && (i % 7 === 0)) {
        document.write(i + '<br>');
    }  
}
