function solve(input) {
    let map = new Map();

    for(let line of input){
        let tokens = line.split(" : ");
        let product = tokens[0];
        let price = tokens[1];
        map.set(product, price);
        
    }

    

    let initials = new Set();
    
    Array.from(map.keys()).forEach(k => initials.add(k[0]));


    for(let char of Array.from(initials.keys()).sort()) {
        if(!(char === undefined)) {
            console.log(char);

            for(let product of Array.from(map.keys()).sort()){
                if(product.startsWith(char)) {
                    console.log(`  ${product}: ${map.get(product)}`);
                }
            }
        }
        
    }
}

solve([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]

);


//moe 

function solve (args) {

let objResult = {};
let store = {};
let myArray = {};
let splitted = [];

for (var i = 0; i < args.length; i++) {

    function createObj (firstLetter, obj) {
        return {[firstLetter]: obj};
    }

    let [product, price] = args[i].split(' : ');
    let firstLetter = product.charAt(0);
    store[product] = Number(price);

    myArray[i] = createObj(firstLetter, store);

    if (objResult.hasOwnProperty(firstLetter)) {
        objResult[firstLetter].push(args[i]);
    } 
    else {
        objResult[firstLetter] = [args[i]];
    }
    objResult[firstLetter].sort();
}

Object.keys(objResult)
      .sort()
      .forEach(function(v, i) {
          console.log(v);
          for (var i = 0; i < objResult[v].length; i++) {
              splitted = objResult[v][i].split(' : ')
              if (!(splitted[0] == undefined || splitted[1] == undefined)){
                console.log('  ' + splitted[0] + ': ' + splitted[1]);
              }
          }
          
        });

}

solve([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]

);