function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2];
    
    if (a === b && b === c){
        console.log(a);
    } else {

    if (!(a === b) && !(b === c)) {
        
            if (a > b && a > c) {
            console.log(a);
            }

            if (b > a && b > c) {
                console.log(b);
            }

            if (c > b && c > a) {
                console.log(c);
            }

        } else {
            if (a === b) {
                if (a > c) {
                    console.log(a);
                } else {
                    console.log(c);
                }
            } else if (b === c) {
                if(b > a ) {
                    console.log(b);
                } else {
                    console.log(a);
                }
            } else if (a === c) {
                if (a > b) {
                    console.log(a);
                } else {
                    console.log(b);
                }
            }
        }
    }
    

}

solve(['6', '6', '6']);