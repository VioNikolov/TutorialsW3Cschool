function solve(args){


    var parsedOne = (parseFloat(Math.pow((args[0] - args[2]), 2) + Math.pow((args[1] - args[3]), 2)));
    var firstLine = Number(Math.sqrt(parsedOne).toFixed(2));

    var parsedTwo = (parseFloat(Math.pow((args[4] - args[6]), 2) + Math.pow((args[5] - args[7]), 2)));
    var secondLine = Number(Math.sqrt(parsedTwo).toFixed(2));

    var parsedThree = (parseFloat(Math.pow((args[8] - args[10]), 2) + Math.pow((args[9] - args[11]), 2)));
    var thirdLine = Number(Math.sqrt(parsedThree).toFixed(2));



function isTriangle(a, b, c){
    
    if(a < b + c && b < a + c && c < a + b){
        return 'Triangle can be built';
    } else {
        return 'Triangle can not be built';
    }

    
}



console.log((firstLine*100/100).toFixed(2));
console.log((secondLine*100/100).toFixed(2));
console.log((thirdLine*100/100).toFixed(2));
console.log(isTriangle(firstLine, secondLine, thirdLine));

}



solve(
[
  '7', '7', '2', '2',
  '5', '6', '2', '2',
  '95', '-14.5', '0', '-0.123'
]
)