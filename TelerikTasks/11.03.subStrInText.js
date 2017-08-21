

function solve (input) {

let x = input[0],
str = input[1];

var regex = new RegExp(x, 'gi');
console.log((str.match(regex)).length);


}



// let x = input[0],
//     count = 0,
//     startIndex = 0;
//     str = input[1];


// while (true) {
//     let index  = str.indexOf('in', startIndex);
//     if (index < 0) {
//         break;
//     }

//     startIndex = index + 1;
//     count++;
// }

// console.log(count);

// }


solve([
	'in',
	'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.in'
]);