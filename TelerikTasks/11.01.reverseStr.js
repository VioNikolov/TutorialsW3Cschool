function solve (input) {

let newStr = '';
for (var i = input[0].length-1; i >= 0; i--) {
    newStr += input[0].charAt(i);
}

console.log(newStr);


}


solve([ 'qwertytrewq' ]);