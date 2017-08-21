'use strict';

var a = parseInt(prompt('Enter A:'), 10),
    b = parseInt(prompt('Enter B:'), 10),
    res = '',
    sum = 0;

for (var i = a; i < b; i++) {
    if(i != a){
        res +=', '; //za da slojim zapetaika edva sled 1vata stoinost, a ne predi tova
                    //nakraq na cikyla shte se izpishi poslednoto chislo i zapetaikata nqma da se izpishe
                    //zashtoto cikyla prekysva
    }
        if(i%3 === 0){
                res +='skip ' + i;
            } else {
                res += Math.pow(i, 2);
                sum +=Math.pow(i, 2);
                if(sum > 200){
                    break;
                }
            }
    
    
    
    
}

console.log(res);