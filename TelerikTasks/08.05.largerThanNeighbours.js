// Write a method that checks if the element at given position in
// given array of integers is larger than its two neighbours (when such exist). 
// Write program that reads an array of numbers and prints how many of 
// them are larger than their neighbours.


function solve(args){

var arrNums = args[1].split(' ');


function isItTheBiggest(arr){
    var count = 0;
    for (var i = 1; i < arr.length-1; i++) {
        arr[i] = parseInt(arr[i]);
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            count += 1;
        }

    }
    console.log(count);
}

isItTheBiggest(arrNums);

}


solve(['6', '-26 -25 -28 31 2 27']);