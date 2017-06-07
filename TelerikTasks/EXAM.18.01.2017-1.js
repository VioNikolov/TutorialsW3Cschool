//Coki Skoki
function solve(args) {

let sum = 0;

  for (let i = 1; i < args.length; i++) {

    let result = 0;
    args[i] = Number(args[i]);

    if (i === 1) {
        sum =  args[i];
        if (args[i] % 2 === 0) {
          i = i + 1;
        } //even
    } else {
        if (args[i] % 2 !== 0) { //оdd

        result = sum * args[i];
        result = result % 1024;

        sum = result;
        
      }
      else { //even

        result = sum + args[i];
        result = result % 1024;

        sum = result;
        i = i + 1;   
          
      }
    }

  }
  
 console.log(sum);
	
}

//2nd variant
// function solve(args) {

// [, ...args] = args.map(x => Number(x));
// let result = args[0];
// let index = 2 - args[0]%2;
// const COEFF = 1024;

// while (index < args.length) {

//   if (args[index] % 2 === 0) { //even
//     result += args[index];
//   }
//   else {
//     result *= args[index];
//   }


// index += 2 - args[index] % 2;
// result = result % COEFF;

// }
// console.log(result);

// }


solve([
'7',
'194',
'1012',
'650',
'259',
'133',
'500',
'680'
]);


