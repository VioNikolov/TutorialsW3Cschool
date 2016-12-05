'use strict';

//Да се въведат N на брой числа и да се намерят най-малкото и най-голямото 

var howMany = parseInt(prompt('How many numbers:')),
    arr = [],
    max,
    min;

if(howMany === 0) { //proverqvame ako vyvedenoto chislo e 0
    max = 0;
    min = 0;
} else { //ako ne e 

    for (var i = 0; i < howMany; i++) {
    arr[i] = parseInt(prompt('write here:'));//prisvoqvame stoinostite v array
    }

    max = Math.max.apply(null,arr);
    min = Math.min.apply(null,arr);
    
}

console.log('max: ' + max);
console.log(('min: ' + min));