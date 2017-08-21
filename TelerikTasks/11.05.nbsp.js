function solve (input) {
    
//variant 2
let str = input[0];
let startIndex = 0;
let result = '';
let theIndex = 0;


while (true) {
    theIndex = str.indexOf(' ', startIndex);
 
    
    if (theIndex < 0) {
        break;
    }
    result += str.substring(startIndex, theIndex) + '&nbsp;';
    startIndex = theIndex + 1;
}

console.log(result + str.substring(startIndex));
}

solve([ 'This text contains 4 spaces!!' ]);



//variant 1
// let str = input[0];
// let result = '';
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//             result = result + '&nbsp;';
//         }
//         else {
//             result = result + str[i];
//         }
//     }

// console.log(result); 