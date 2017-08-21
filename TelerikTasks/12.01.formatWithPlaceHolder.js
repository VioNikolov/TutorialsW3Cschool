function solve(args) {

String.prototype.changeText = function (options){
	let result = this;

	for (var prop in options) {
		result = result.replace(new RegExp('#{' + prop + '}', 'g'), options[prop]);
	}
	return result;

};


let options = JSON.parse(args[0]);
result = args[1].changeText(options);

console.log(result);

}




solve([
'{ "name": "John", "age": 13, "profession": "doc", "bil": "John", "agex": 13, "profession1": "doc" }',
"My name is #{name} and I am #{age}-years-old and I'am #{profession} My name is #{bil} and I am #{agex}-years-old and I'am #{profession1}"
]);