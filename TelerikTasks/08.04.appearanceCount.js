//Write a method that counts how many times given number appears in a given array.
//Write a test program to check if the method is working correctly.
function solve(args){

  var arrCount = args[0],
      arrN = args[1],
      x = args[2];

      arrN = arrN.split(' ');

      function findX(x, arr){
          var count = 0;
            for (var i = 0; i < arr.length; i++) {
                if(x == arr[i]){
                    count += 1;
                }
            }
            console.log(count);
      }

 
 findX(x, arrN);
}


solve(['8', '28 6 21 6 -7856 73 73 -56', '73']);