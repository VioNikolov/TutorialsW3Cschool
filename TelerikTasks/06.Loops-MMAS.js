function solve(args) {
    var n = args,
        minN = +n[0],
        maxN = +n[0],
        sumN = 0,
        avgN;


for (var i = 0; i < n.length; i++) {

    if(minN > +n[i]){
        minN = +n[i];

    }

    if(maxN < +n[i]){
        maxN = +n[i];
    }

    sumN += +n[i];
    avgN = sumN/n.length;
}

console.log('min=' + minN.toFixed(2));
console.log('max=' + maxN.toFixed(2));
console.log('sum=' + sumN.toFixed(2));
console.log('avg=' + avgN.toFixed(2));
   

}

solve(['2', '-5', '1']);