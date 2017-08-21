// Write a method that returns the index of the first element in array 
// that is larger than its neighbours, or -1, if there is no such element.


function solve(args){

var arrNums = args[1].split(' ');


function isItTheBiggest(str, arr){

    var n = -1;
    for (var i = 1; i < arr.length-1; i++) {
        arr[i] = parseInt(arr[i]);
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            return i;
        }

    }

}

if(isItTheBiggest(args[1], arrNums) === undefined){
    console.log(-1);
} else{
    console.log(isItTheBiggest(args[1], arrNums));
}

}


solve(['6', '-26 -25 -24 1 2 3']);