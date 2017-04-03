function solve (args) {

var wordList = ['гаден', 'лош'];
var strArr;
var counter = '';
 
var char = args[0].charAt(args[0].length-1);//взимаме препин. знак
var str = args[0].toLowerCase(); //Всичко с малка буква 
str = str.slice(0, -1);//махаме точката накрая

var splitedArr = str.split(" ");//правим масив от стринга


for (var i = 0; i < splitedArr.length; i++) {
    counter = '';
    for (var j = 0; j < wordList.length; j++) {
        if(splitedArr[i] === wordList[j]){
            for (var y = 0; y < splitedArr[i].length; y++) {
                counter += '*';
            }
            splitedArr[i] = counter;
        }
        
    }
    
}

function firstToUpperCase( arr ) {//прави първия знак toUperCase
    return arr.substr(0, 1).toUpperCase() + arr.substr(1);
}

strArr = splitedArr.join(' ');
var withUpper = firstToUpperCase(strArr);
console.log(withUpper + char);
}


solve(['Колко пък да е гаден и лош?']);