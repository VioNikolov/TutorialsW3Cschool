function solve(args) {
    var n = args[0],
        hexArr =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'],
        hex = 0;
        //slice1 = n.charAt(0), //vzimame stoinostite ot podadeniq n
        //slice0 = n.charAt(1), //
        
        //numHex1 = hexArr.indexOf(slice1), //obryshtame stoinostite im v chisla
        //numHex0 = hexArr.indexOf(slice0); //



for (var i = 0, y = (n.length)-1; i < n.length; i++, y--) {
    
    hex += (hexArr.indexOf(n.charAt(i)) * Math.pow(16, [y]));
    
}
        
        
    console.log(hex);
}


solve(['1AE3']);


