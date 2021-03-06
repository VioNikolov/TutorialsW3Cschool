function solve(input) { 

let result = {};

for (var i = 0; i < input.length; i++) {
    let splitted = input[i].split(' | ');

    let systemName = splitted[0];
    let compName = splitted[1];
    let subcompName = splitted[2];
    
    if ((result.hasOwnProperty(systemName))) { //dali ima systemName

        if (result[systemName].find(x => x.compName === compName)) { //ako ima compName

            result[systemName].map(function(element) {
                if (element.compName === compName) {
                    element.subcompName.push(subcompName);
                }
            });
        }
        else {
            result[systemName].push({compName: compName, subcompName: [subcompName]}); //ako nqma compName, dobavi celiq input kym systemName
        }
    }   
    else {
        result[systemName] = [{compName: compName, subcompName: [subcompName]}];//ako nqma systemName, dobavi go s value []
    }
}

function sortSystems(s1, s2) {
        if(result[s1].length != result[s2].length) {
            return result[s2].length - result[s1].length;
        } else {
            return s1.toLowerCase().localeCompare(s2.toLowerCase());
        }
    }

function sortComponents(system, c1, c2) {
        return result[system][c2].length - result[system][c1].length;
}

let systemSorted = Object.keys(result).sort((s1, s2) => sortSystems(s1, s2));
Object.keys(result).map(function(element){ 
                result[element].sort((x, y) => y.subcompName.length - x.subcompName.length);
});

    for (let el of systemSorted) {
        if (el != undefined) {
            console.log(el);                      
        }
        
        for (let el2 of result[el]) {
            if (el2.compName != undefined) {
   
                compNameSorted = el2.subcompName.sort(function(s1, s2) {
                    return s2.subcompName - s1.subcompName;
                });
                console.log('|||' + el2.compName);
            }

            for (let el3 of el2.subcompName){
                if(el3 != undefined) {
                    console.log('||||||' + el3);
                }
               
            }
        }
       
    }
}

solve([
'SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B23',
'Lambda | CoreB | B24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'

]

);


//With new Map
function solve(input) {
    let systems = new Map();

    for (var i = 0; i < input.length; i++) {
        let splitted = input[i].split(' | ');
        let system = splitted[0];
        let compName = splitted[1];
        let subCompName = splitted[2];

        if (! systems.get(system)) {
            systems.set(system, new Map);
        }

        if (! systems.get(system).get(compName)) {
            systems.get(system).set(compName, []);
        }
        systems.get(system).get(compName).push(subCompName);
    }

    let systemsSorted = Array.from(systems.keys()).sort((x, y) => sortSystems(x, y));

    for (let el of systemsSorted) {
        console.log(el);
        let compSorted = Array.from(systems.get(el).keys()).sort((x, y) => sortComp(x, y, el));
        
        for (let el2 of compSorted) {
            if (el2 != undefined) {
                console.log(`|||${el2}`);
            }
            
           
           for (let el3 of systems.get(el).get(el2)) {
                if (el3 != undefined) {
                    console.log(`||||||${el3}`);
                }            
           }
        }
    }


    function sortSystems (x, y) {
        if (systems.get(y).size != systems.get(x).size) {
            return systems.get(y).size - systems.get(x).size;
        }
        else {
            return x.localeCompare(y);
        }
    }

    function sortComp (x, y, el) {
        if (systems.get(el).get(y).size != systems.get(el).get(x).size) {
            return systems.get(el).get(y).size - systems.get(el).get(x).size;
        }
    }  
}

solve([
'SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B23',
'Lambda | CoreB | B24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'

]

);