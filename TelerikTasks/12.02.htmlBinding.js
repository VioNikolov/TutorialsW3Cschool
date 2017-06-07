function solve(args) {

    let options = JSON.parse(args[0]);

	function getMatches(string, regex, index) {
		index || (index = 1); // default to the first capturing group
		var matches = [];
		var match;

		while (match = regex.exec(string)) {
			matches.push(match[index]);
		}
		return matches;
	}
	
	String.prototype.bind = function (options){
		let result = this;
		let regex = /data-bind-(\w+)="([^"]*)"/g;
		
		let matchesBind = getMatches(args[1], regex, 1);
		let matchesValue = getMatches(args[1], regex, 2);
		if (null === matchesBind || matchesValue === null) {
			return result;
		}
		let realResult = '';
		let firstTag = result.match(/^\W(\S+)/);
		for (var i = 0; i < matchesBind.length; i++) {
			if (matchesBind[i] === 'content') {
				realResult = result.replace(/<[^>]*>$/, options[matchesValue[i]] + `</${firstTag[1]}>`);
			} 
			else {
				realResult = realResult.replace(/>[^>]*>$/, ` ${matchesBind[i]}="${options[matchesValue[i]]}" `) + realResult.match(/>[^>]*>$/);	
			}
		}
		return realResult;		
	};

	console.log(args[1].bind(options));	
}


solve([
	'{ "name": "Elena", "link": "http://telerikacademy.com", "color": "#ADJ42D" }',
	'<a data-bind-content="name" data-bind-href="link" data-bind-class="name" data-bind-bgcolor="color"></а>'
]);


//<div data-bind-content="name">Steven</div>