function solve (args) {
  
var str1 = args[0],
    str2 = args[1],
    len;

    str1Len = str1.length;
    str2Len = str2.length;
    maxLen = Math.max(str1Len, str2Len);


 if(str1 == str2){
        console.log('=');
    } else {
        for (var i = 0; i < maxLen; i++) {

        
        if (str1[i] < str2[i]){
             console.log('<');
             break;

        }
        if (str1[i] > str2[i]){
             console.log('>');
                 break;
        }

        if(str2[i] === undefined) {
            console.log('>');
            break;
        }

        if(str1[i] === undefined) {
            console.log('<');
            break;
        }

    }

}

}
solve(['hello', 'halo']);
