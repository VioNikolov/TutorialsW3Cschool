function solve(args) {
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        d,
        x,
        x1,
        x2;
 

    d =  b*b - 4*a*c;
    if (d < 0) {
        console.log('no real roots');
    } else if(d===0){
        x = -(b/(2*a));
        x = x.toFixed(2);
        console.log('x1=x2='+x);
    }  else {
        d = Math.sqrt(d);
        x1 = (-(b) + d)/(2*a);
        x1 = x1.toFixed(2);

        x2 = (-(b) - d)/(2*a);
        x2 = x2.toFixed(2);
        console.log('x1=' + x2 + '; x2=' + x1);
    }

}

solve(['0.2', '9.572', '0.2']);