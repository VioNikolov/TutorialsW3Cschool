function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        sum = 0;

    if (a === 0 || b === 0 || c === 0) {

        console.log('0');

    } else {

        if (a < 0){
            sum += 1;
        } 
        
        if (b < 0) {
            sum += 1;
        }  
        
        if (c < 0) {
            sum += 1;
        }

        if (sum === 3) {
            console.log ('-');
        } else if (sum === 2) {
            console.log ('+');
        } else if (sum === 1) {
            console.log('-');
        } else if (sum === 0) {
            console.log('+');
        }
    }

}