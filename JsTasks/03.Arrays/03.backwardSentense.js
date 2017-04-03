function solve (args) {
  console.log(args[0]); 
  var str = args[0].toLowerCase(); //Всичко с малка буква 
  str = str.slice(0, -1);//махаме точката накрая

  var splitedArr = str.split(" ");//правим масив от стринга
  splitedArr.reverse();//обръщаме го наобратно


function firstToUpperCase( arr ) {//прави първия знак toUperCase
    return arr.substr(0, 1).toUpperCase() + arr.substr(1);
}



var strArr = splitedArr.join(' ');//отново го правим на стринг
var xaxa = firstToUpperCase(strArr);//правим 1-вия знак с главна буква
console.log(xaxa + '.');//добавяме точката
}


solve(['Много ми се ходи до тоалетна.']);
