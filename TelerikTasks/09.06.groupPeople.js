let people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'John', lastname: 'Doe', age: 42 },
  { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
  { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
  { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

let obj = {};
let groupedByAge = group(people);

function group (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i].age)) {
            obj[arr[i].age].push(arr[i]);
        }
        else {
            obj[arr[i].age] = [arr[i]];
        }
        
    }
}

console.log(obj);

Object.keys(obj).forEach(function(x) {
    obj[x].forEach(y => console.log(`${y.firstname} ${y.lastname} ${y.age}`));
});