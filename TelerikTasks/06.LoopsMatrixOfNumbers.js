function solve(args) {
    var n = +args[0];
    
                  
    for (var row = 1; row <= n; row++) {
        //var arr se zadava tuk a ne nai-otgore zashtoto vseki pyt se prezapisva,
        //inache shte sybira vseki pyt novite str sys starite '123234345' etc.
        var arr = ''; 

        //ako row = 2, arr += (2 + 1 - 1) => 2(1vata cifra); sled tova (2 + 2 -1) = 3 (2rata cifra ot 2riq red(row = 2));
        for (var col = 1; col <= n; col++) { 
            //pechatim red (row), kato vsqko zavyrtane na 2riq cikyl pechati 1 cifra(edna col v row-a) i slagame prazno mqsto
            arr += (row + col -1) + ' ';

        }

        //sled izlizaneto ot 2riq cikyl pechati masiva koito se e sybral v arr, demek row-a
        console.log(arr);
    }

}
solve(['3']);


