function solve (args) {
  
var n = args.shift(0),
    repedNum,
    count = 1,
    theNewestArr = [],
    maxSeq = 1;

args.sort(function(a,b){ //Array now becomes [7, 8, 25, 41]
    return a - b;
});




for (var i = 0; i < args.length; i++) {

    if (args[i] == args[i+1]){
        count += 1;
        if(count > maxSeq){
            maxSeq = count;
            repedNum = args[i];
        }
    } else {
        count = 1;
    }
    
}

console.log(repedNum +' (' + maxSeq + ' times)');


}


solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
