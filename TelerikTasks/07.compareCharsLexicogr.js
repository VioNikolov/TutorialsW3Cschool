function solve (args) {
    var str1 = args[0],
        str2 = args[1],
        minlen = Math.min(str1.length, str2.length),
        res;


    if(str1 == str2){
        res = '=';
    } else {
        if(str1.length > str2.length){
            for (var i = 0; i <= str1.length-str2.length; i++) {
                str2 +=0;
            }  
        }

        if(str1.length < str2.length){
            for (var i = 0; i <= str2.length-str1.length; i++) {
                str1 +=0;
            }
        
        }

        for (var i = 0, j =0; i < str1.length; i++, j++) {
        
                if(str1[i] > str2[j]){
                    res = '>';
                    break;
                } else if (str1[i] < str2[j]){
                    res = '<';
                    break;
                }         
        }
        
    }
console.log(res);
}

solve(['hal2', 'hal22']);