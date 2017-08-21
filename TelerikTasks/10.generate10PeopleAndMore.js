"use strict";

console.log('=========== 1. Make person ============');
const people =  [
   'Gosho', 'Petrov', '26', false,
  'Toncho', 'Boncho', '5', false,
  'John', 'Doe', '42', false,
   'Gosho', 'dsdsds', '32', false,
   'Baba', 'Penka', '78', true,
  'Bay', 'Ivan', '81', false,
  'John', 'Doe', '31', false,
  'Ivanka', 'Petrova', '24', true,
  'Gergana', 'Kostadinova', '13', true,
  'Sonia', 'Ivanova', '18', true
    ];


function personBuilder(fname, lname, age, gender){
    return {
      firstname: fname,
      lastname: lname,
      age: age,
      gender: gender
    };
}

let myArray = [];
for (let i = 0, y = 0; i < people.length; i += 4, y++) {
    
    myArray[y] = personBuilder(people[i], people[i+1], people[i+2], people[i+3]);
    
}
console.log(myArray);
console.log('=========== 2. People of age ============');
function checkAge18(x){
    return x.age > 18;
}

console.log(myArray.every(checkAge18));//all adult ppl?



console.log('=========== 3. Underaged people ============');
console.log(myArray.filter(x => x.age < 19).forEach(x => console.log(x))); //underaged ppl

console.log('=========== 4. Average age of females ============');
let onlyWomen = myArray.filter(x => x.gender === true);

let reducedAge = Object.keys(onlyWomen).map(key => Number(onlyWomen[key].age)).reduce((previous, current) => previous + current);
let final = reducedAge/onlyWomen.length;
console.log(final);


console.log('=========== 5. Youngest person (male) ============');
let onlyMen = myArray.filter(x => x.gender === false);

let arrOfAges = Object.keys(onlyMen).map(key => Number(onlyMen[key].age));
console.log(arrOfAges);
let sortArrOfAges = arrOfAges.sort((x, y) => x -y);
let resultYoungest = onlyMen.find(x => Number(x.age) === sortArrOfAges[0]);

console.log(resultYoungest);

console.log('=========== 6. Group people ============');
let result = {};

for (var i = 0; i < myArray.length; i++) {
    let firstLetter = myArray[i].firstname.charAt(0).toLowerCase();
    if(result.hasOwnProperty(firstLetter)){
        result[firstLetter].push(myArray[i]);
    }
    else {
        result[firstLetter] = [myArray[i]];
    }
    
}
console.log(result);


