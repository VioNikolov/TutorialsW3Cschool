//Pockets
function solve(args) {

let arrHeigths = args[0].split(' ').map(x => Number(x));


let sum = 0;
let onlyPeaks = new Array(arrHeigths.length);

  for (let i = 1; i < arrHeigths.length - 1; i++) {
      if ((arrHeigths[i] > arrHeigths[i - 1]) && (arrHeigths[i] > arrHeigths[i + 1])) {
        onlyPeaks[i] = arrHeigths[i];
      } 
  }

  for (let i = 0; i < onlyPeaks.length; i++) {
    if ((onlyPeaks[i] !== undefined) && (onlyPeaks[i + 2] !== undefined)) {
      sum += arrHeigths[i + 1];
    }
    
  }

  console.log(sum);
}


solve([
    "53 20 1 30 2 40 3 10 1"
]);


