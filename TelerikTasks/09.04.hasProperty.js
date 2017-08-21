function hasProperty(obj, prop){
    
    return obj.hasOwnProperty(prop);
    
}

let person = {name: 'gosho', address: 'sofia'};


console.log(hasProperty(person, 'name'));