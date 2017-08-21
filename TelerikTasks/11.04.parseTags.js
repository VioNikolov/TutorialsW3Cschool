function solve (input) {

    let str = input[0];

    let result = '';


for (var i = 0; i < str.length; i++) {

    if (str[i] === '<') {
        if (str[i + 1] === 'u' && str[i + 2] === 'p') {
            i = i + 8;

            
            while (str[i] != '<') {
                result += str[i].toUpperCase();
                i++;
            }
            i = i + 8;
        }

        if (str[i + 1] === 'l' && str[i + 2] === 'o') {
            i = i + 9;
            while (str[i] != '<') {
                result += str[i].toLowerCase();
                i++;
            }
             i = i + 9;
            
        }

        if (str[i + 1] === 'o' && str[i + 2] === 'r') {
            i = i + 9;
            while (str[i] != '<') {
                result += str[i];
                i++;
            }
            i = i + 9;
        }

    }
    else {
        result += str[i];
    }

}
console.log(result);

}

solve([ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. <upcase></upcase>We <orgcase>doN\'t</orgcase> have <lowcase>anyThing</lowcase> else.<upcase>yellow submarine</upcase>' ]);
