function solve (args) {
  

/* ne se vpisva vyv vremeto*/  
var arr = [],
    counter = 0,
    trueArr = [],
    num,
    n = args[0];

for (var r = 2; r <= n; r++) {
    arr[r] = true;
    
}


for (var i = 2; i <= Math.sqrt(n); i++){
    counter = 0;
    if(arr[i] === true){
        for (var j = (i*i); j <= n; j = (i*i)+counter) {
            arr[j] = false;
            counter += i;
        }
    }

}

for (var w = n-1; w >= 2; w--) {
   
    if(arr[w] === true){
        num = arr.lastIndexOf(arr[w]); 
        
    }
}
console.log(num);

}



/*vpisva se*/
function solve(args) {
    var N = parseInt(args);

    for (var i = N; i > 1; i -= 1) {
        var is_prime = true;
        for (var j = 2; j < Math.sqrt(N); j += 1) {
            if (i % j === 0) {
                is_prime = false;
                break;
            }
        }
        if (is_prime) {
            console.log(i);
            break;
        }
    }
}


solve(['26']);