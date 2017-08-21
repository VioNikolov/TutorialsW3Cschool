function juices(input) {

   let store = {};
   let result = {};

   for (var i = 0; i < input.length; i++) {
        let [item, quantity] = input[i].split(' => ');

        if (item in store) {
            store[item] += Number(quantity);
        } 
        else {
            store[item] = Number(quantity);
        }
     

        if (store[item] > 999) {
            if(item in result) {
                result[item] += Number(quantity); 
            } 
            else {
                result[item] = store[item];
            }
        }

   }
   
    for (i in result) {
        console.log(`${i} => ${(result[i]/1000) | 0}`);
    }

}

juices(
    [
    'X => 301',
    'X => 800',
    'y => 1777',
    'X => 999',
    'y => 2300',
    ]
);


