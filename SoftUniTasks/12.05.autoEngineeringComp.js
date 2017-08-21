function solve(input) {


let result = {};
for (var i = 0; i < input.length; i++) {
    splitted = input[i].split(' | ');
    let doesntHaveModel = true;
    let brand = splitted[0];
    let model = splitted[1];
    let producedCars = Number(splitted[2]);

    if (result.hasOwnProperty(brand)) { //ako ima brand s takova ime
        
        result[brand].map(function(element) {
            if (model === element.model) { //ako ima takyv model v masiva koito e value na brand
                
                return element.producedCars += producedCars; //dobavi producedCars
                
            } 
            else {
                if (result[brand].find(x => x.model === model)) {
                    doesntHaveModel = false;
                }

                if (doesntHaveModel) {
                    result[brand].push({model, producedCars});//ako nqma model v masiva, dobavi go
                }
            }
        });
         
    }
    else {
        result[brand] = [{model, producedCars}];// ako v result nqma brand s takova ime, dobavi go
    }
}


    for (let el in result) {
        console.log(el);
        for (let i = 0; i < result[el].length; i++) {
            if (!(result[el][i].model === undefined) && !(result[el][i].producedCars === null)) {
                console.log('###' + result[el][i].model + ' -> ' + result[el][i].producedCars);
            }
        }
    }


}

solve([
'Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'Audi | Q6 | 100',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10',
'Citroen | C5 | 10'
]

);