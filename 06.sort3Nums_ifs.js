function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];
    
    if (a === b && b === c){
        console.log(a + ' ' + b + ' ' + c);
    } else {

    if (!(a === b) && !(b === c)) {
        
            if (a > b && a > c) {
                if (b > c) {
                    console.log(a + ' ' + b + ' ' + c);
                } else {
                    console.log(a + ' ' + c + ' ' + b);
                }
            }

            if (b > a && b > c) {
                 if (a > c) {
                    console.log(b + ' ' + a + ' ' + c);
                } else {
                    console.log(b + ' ' + c + ' ' + a);
                }
            }

            if (c > b && c > a) {
                if (b > a) {
                    console.log(c + ' ' + b + ' ' + a);
                } else {
                    console.log(c + ' ' + a + ' ' + b);
                }
            }

        } else {
            if (a === b) {
                if (a > c) {
                    console.log(a + ' ' + b + ' ' + c);
                } else {
                    console.log(c + ' ' + a + ' ' + b);
                }
            } else if (b === c) {
                if(b > a ) {
                    console.log(c + ' ' + b + ' ' + a);
                } else {
                    console.log(a + ' ' + b + ' ' + c);
                }
            } else if (a === c) {
                if (a > b) {
                    console.log(a + ' ' + c + ' ' + b);
                } else {
                    console.log(b + ' ' + a + ' ' + c);
                }
            }
        }
    }
    

}

solve(['1', '5', '3']);