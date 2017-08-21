function solve (input) {

let result = '';
		
		for (let y = 0; y < input.length; y++) {

			let regex = /<[^>]+>/ig;

			if (input[y] != undefined) {
				result = result + input[y].replace(regex, '').trim();
			}   

		}

	console.log(result);
}

solve([
	'<html>',
	'  <head>',
	'    <title>Sample site</title>',
	'  </head>',
	'  <body>',
	'    <div>text',
	'      <div>more text</div>',
	'      and more...',
	'    </div>',
	'    in body',
	'  </body>',
	'</html>'
]);

