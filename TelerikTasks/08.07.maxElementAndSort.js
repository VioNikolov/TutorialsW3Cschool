// Write a method that returns the maximal element in a portion of
//  array of integers starting at given index.
//   Using it write another method that sorts an 
//   array in ascending / descending order. 
// Write a program that sorts a given array.

//50 tochki - 100 по условието, гърми за време
function solve(args){

var arrNums = args[1].split(' ');


function findMax(arr){
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

var funcMax = findMax(arrNums);

function sorting(max, arr){
    var ascending = '';
    for (var i = 0; i < max; i++) {
        for (var j = max-1; j >= 0; j--) {
            if(i == arr[j]){
                ascending +=  arr[j] + ' ';
            }
        }
        
    }
    return ascending + max;
}


console.log(sorting(funcMax, arrNums));

}


solve(['6', '3 4 1 7 5 2 6 9 10']);
//край на 50 точки



//100 точки - не е 100% по условието
function solve(args){

var arrNums = args[1].split(' ');


function findMax(arr){
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

var funcMax = findMax(arrNums);

 var sorted = arrNums.sort(function (a, b) {
        return a - b;
    });


console.log(sorted.join(' '));



}


solve(['6', '3 4 1 7 5 2 6 9 10']);
//край на 100 точки