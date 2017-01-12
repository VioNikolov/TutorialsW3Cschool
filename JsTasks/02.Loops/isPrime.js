'use strict';

//Chislo e prosto ako se deli na 1 ili na sebe si
//Namerame se kato se testva dali se deli na 2 ravni chasti ot celi chisla
//sled korena na chisloto e izlishno da se tyrsi delitel


var a = parseInt(prompt('Enter A:'), 10),
    divider = 2,
    maxDivider = Math.sqrt(a),
    prime = true;

for (var i = 0; i <= maxDivider; i++) {
    if(a % divider === 0){
        prime = false;
    }
    divider++;

}
console.log(prime);
