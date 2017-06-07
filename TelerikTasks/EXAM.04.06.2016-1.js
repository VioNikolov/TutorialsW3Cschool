//Valleys
function solve(args) {

let arrHeights = args[0].split(' ');
let peaks = [];
let peaksOnly = new Array(arrHeights.length);

for (let i = 0; i < arrHeights.length; i++) {
	peaks[i] = +arrHeights[i];
}


peaksOnly[0] = peaks[0];
peaksOnly[peaks.length - 1] = peaks[ peaks.length - 1];
for (var i = 2; i < peaks.length - 2; i++) {
	if((peaks[i] > peaks[i - 1]) && (peaks[i] > peaks[i + 1])) {
		peaksOnly[i] = +peaks[i];
	}
}

let sum = 0;
let biggest = 0;
let lastPeak = 0;
for (let i = 0; i < peaks.length; i++) {
	if (peaksOnly[i] != undefined) {
		for (var y = lastPeak; y <= i; y++) {
			sum = sum + peaks[y];
			if((peaks[i] > peaks[i - 1]) && (peaks[i] > peaks[i + 1]) && (i !== 0)) {
				if (sum > biggest) {
					biggest = sum;
					
				}
				lastPeak = i;
			}
			else if (peaks.length - 1) {
				if (sum > biggest) {
					biggest = sum;
					
				}
			}
			
		}
		
	} 
	sum = 0;
}

console.log(biggest);




}


solve([
    "5 1 7 4 8"
]);


