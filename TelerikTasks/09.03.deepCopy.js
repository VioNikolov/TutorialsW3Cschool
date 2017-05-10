function clone(obj) {
    if (null == obj || 'object' != typeof obj) {//проверяваме ако НЕ е обект
        return obj;//върни НЕобекта
    }

    var copy = {};//обекта в който ще копираме стойностите от 1вия обект

    for (var attr in obj) { //за всяко проперти
            if (obj[attr]) { //провери дали го има
                copy[attr] = obj[attr];//запиши го в новия обект
            }
    }

    return copy;//върни новия обект
}

console.log(clone(5));
console.log(clone({
    name: 'Bisu',
    profession: 'progamer'
}));

//по-добре:

function deepCopy(obj){
    if(typeof obj === 'object'){//ако е функция ще отиде най-долу и ще я върне по референция
        let newObj = Array.isArray(obj) ? [] : {};//дали е масив или обект, за да знаем в какво да го запазим
                                                 
        for(let i in obj){
            newObj[i] = deepCopy(obj[i]);
        }
        return newObj;
    }
    else {
        return obj;
    }
}