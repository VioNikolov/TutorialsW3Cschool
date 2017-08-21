function Person (first, last, age, gender, interests) {
  this.name = {first, last};
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  let typeGender = 'She';
  let interestsBio = '';
  if (gender === 'male') {
    typeGender = 'He';
  }

  (function numOfInterests() {
    for (var i = 0; i < interests.length; i++) {
      if (i === interests.length - 1) {
        interestsBio = interestsBio + ' and ' + interests[i];
        break;
      } 
      interestsBio = interestsBio + ' ' + interests[i];
      if (i < interests.length - 2) {
        interestsBio = interestsBio + ',';
      }
    }
  })();
  this.bio = `I am ${first} ${last}, ${age} years old, ${gender} and I like${interestsBio}. 
${typeGender} is ${age} years old.`;
}

let vio = new Person ('Vio', 'Mio', 26, 'male', ['fitness', 'games', 'walks']);
let didi = new Person ('Didi', 'Bidi', 28, 'female', ['fitness', 'games', 'law', 'bf']);

console.log(vio.bio);
console.log(didi.bio);

