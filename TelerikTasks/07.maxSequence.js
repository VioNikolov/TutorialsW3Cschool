function solve (args) {
  
var n = args.shift(0),
    count = 1,
    maxSeq = 1;

for (var i = 0; i < args.length; i++) {

    if (args[i] == args[i+1]){
        count += 1;
        if(count > maxSeq){
            maxSeq = count;
        }
    } else {
        count = 1;
    }
    
}

console.log(maxSeq);

}



solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);