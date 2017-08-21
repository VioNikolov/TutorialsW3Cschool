function solve(args) {

Array.prototype.remove = function(element) {

    for (var i = 0; i < this.length; i++) {
        
        if(this[i] == element){
            this.splice(i, 1);
            i--;
        }
    }

   
}

args.remove(args[0]);

for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }




    

}




solve(
    [
  1,2,1,4,1,3,4,1,111,3,2,1,'1'
]
);