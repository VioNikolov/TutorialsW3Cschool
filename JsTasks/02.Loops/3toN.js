'use strict';

//Започвайки от 3, да се изведат на екрана първите 
//N числа които се делят на 3. Числата да са разделени със запетая. 

var n = parseInt(prompt('Enter N:'));
var res = '';
for (var i = 3; i < n; i++) { //pri n = 7
    if(i%3 === 0) {
        if(i!=3) {
        res += ', '; //sled kato veche sme vlezli v 1viq if znachi imame 3, izpisvame go, sled tova imame 4,5 koito skipvame v if-a
                    //pri 6 obache vlizame i v 2-ta if-a, t.e. pyrvo slagame ', ' i sled tova dobvqme 6
        }
        res += i ;
    }
    
}
console.log(res);