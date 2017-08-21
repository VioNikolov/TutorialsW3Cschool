//Standart
function reverseArray (arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}


//In place
function reverseArrayInPlace (arr) {

  if (arr.length % 2 === 0) {
    for (let i = 0; i <= (arr.length/2) - 1; i++) {
      let temp = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  else { 
    
    for (let i = 0; i <= (Math.floor(arr.length/2) - 1); i++) {
      let temp = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));