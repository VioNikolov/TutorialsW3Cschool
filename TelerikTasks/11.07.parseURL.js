function solve (input) {

	let str = input[0];
	let protocol = str.substring(0, (str.indexOf('://')));

	console.log('protocol: ' + protocol);
	let start = (str.indexOf('://') + 3);
	let end = str.indexOf('/', start);
	let server = str.substring(start, end);

	console.log('server: ' + server);

	let resource = str.substr(end);

	console.log('resource: ' + resource);
}

solve([ 'http://telerikacademy.com/Courses/Courses/Details/239' ]);

