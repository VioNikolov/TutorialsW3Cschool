function isPrime(args) {



    
//Understand the trial division method. 
//By the definition of primality, n is only prime if it 
//cannot be divided evenly by integers 2 or greater. 
//The formula given saves time by removing unnecessary tests 
//(e.g. after testing 3 there is no need to test 9).
//Ceiling(x) rounds x to the closest integer ≥ x.

    var n = +args[0];
    var divider = 2; //zapochvame da probvame delitelite ot 2 nagore
    var maxDivider = Math.sqrt(n); //korena na n
    var prime = true;
    
    while (prime && (divider <= maxDivider)) { //delitelq trqbva da e po malyk ili raven na korena ot chisloto, zashtoto sled tova stava izlishno da se tyrsi
        if(n % divider === 0){ //ako n razdeleno na delitelq e bez ostatyk => false
            prime = false;
        }
        divider++; //oshte sme v cikyla i pokachvame razdelitelq, dokato ne stigne divider > maxDivider
    }
console.log(prime);

}


isPrime(['676']);