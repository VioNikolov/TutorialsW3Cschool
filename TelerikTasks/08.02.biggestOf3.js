function solve(args){
    

var arr = args[0].split(' ');

    function getMax(a, b){
        var biggest = a;
        if (biggest < b){
            biggest = b;
        }
        return biggest;
    }

return getMax(+arr[0], (getMax(+arr[1], +arr[2])));


}


solve(['8 3 6']);