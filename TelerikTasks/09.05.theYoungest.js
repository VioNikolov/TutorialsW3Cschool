function solve(args){

function personBuilder(fname, lname, age){
    return {
        firstname: fname,
        lastname: lname,
        age: age
    };
}


let myArray = [];
for (let i = 0, y = 0; i < args.length; i += 3, y++) {
    
    myArray[y] = personBuilder(args[i], args[i+1], args[i+2]);
    
}



function theYoungest(arr){
    let count = arr[0].age;
    let youngestMan = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(parseInt(count) > parseInt(arr[i].age)){
            youngestMan = arr[i];
            count = arr[i].age;
        }
        
    }
    console.log(youngestMan.firstname + ' ' + youngestMan.lastname);
}


theYoungest(myArray);

}


solve(
    [
   'Gosho', 'Petrov', '32',
  'Bay', 'Ivan', '5',
  'John', 'Doe', '42',
   'Gosho', 'dsdsds', '32',
  'Bay', 'Ivan', '81',
  'John', 'Doe', '31'
    ]
);