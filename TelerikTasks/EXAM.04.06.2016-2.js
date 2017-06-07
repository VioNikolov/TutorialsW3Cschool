//Game of tanks
function solve(args) {

let [row, col] = args[0].split(' ');

let field = [];
const EMPTY_FIELD = -1;
const DEBRI = '@';
let koceto = 4;
let cuki = 4;

//creating field
for (let i = 0; i < row; i++) {
	field[i] = [];
	for (let y = 0; y < col; y++) {
		field[i][y] = EMPTY_FIELD;
	}
}
Number(row);
Number(col);
//creating tanks
let tanks = [
	{row: 0, col: 0},
	{row: 0, col: 1},
	{row: 0, col: 2},
	{row: 0, col: 3},
	{row: row - 1, col: col - 1},
	{row: row - 1, col: col - 2},
	{row: row - 1, col: col - 3},
	{row: row - 1, col: col - 4}
];

//deploing the tanks into the field
let index = 0;
tanks.forEach(function(elem) {
	field[elem.row][elem.col] = index;
	index++;
}, this);

//deploing the debries
let debries = args[1].split(';');

for (let i = 0; i < debries.length; i++) {
	let [debRow, debCol] = debries[i].split(' ');
	field[Number(debRow)][Number(debCol)] = DEBRI;

}

//commands

for (let i = 3; i < args.length; i++) {
	if (args[i][0] === 'm') {
		let commands = args[i].split(' ');
		move(Number(commands[1]), Number(commands[2]), commands[3]);
	}
	else {
		
		let commands = args[i].split(' ');
		attack(Number(commands[1]), commands[2]);
	}
	if (cuki < 1) {
		console.log('Cuki is gg');
		break;
	}
	if (koceto < 1) {
		console.log('Koceto is gg');
		break;
	}
	
}


function move(id, steps, dir) {
	for (var i = 1; i <= steps; i++) {
		if (dir === 'l') {
			if (field[tanks[id].row][tanks[id].col - 1] === EMPTY_FIELD) {
				field[tanks[id].row][tanks[id].col] = EMPTY_FIELD;
				field[tanks[id].row][tanks[id].col - 1] = id;
				tanks[id].col = tanks[id].col - 1;

			} else {
				break;
			}
		}

		if (dir === 'r') {
			if (field[tanks[id].row][tanks[id].col + 1] === EMPTY_FIELD) {
				
				field[tanks[id].row][tanks[id].col] = EMPTY_FIELD;
				field[tanks[id].row][tanks[id].col + 1] = id;
				tanks[id].col = tanks[id].col + 1;
	
			} else {
				break;
			}
		}

		if (dir === 'u') {
			if (field[tanks[id].row - 1][tanks[id].col] === EMPTY_FIELD) {

				field[tanks[id].row][tanks[id].col] = EMPTY_FIELD;
				field[tanks[id].row - 1][tanks[id].col] = id;
				tanks[id].row = tanks[id].row - 1;
			} else {
				break;
			}
		}

		if (dir === 'd') {
			if (field[tanks[id].row + 1][tanks[id].col] === EMPTY_FIELD) {
			
				field[tanks[id].row][tanks[id].col] = EMPTY_FIELD;
				field[tanks[id].row + 1][tanks[id].col] = id;
				tanks[id].row = tanks[id].row + 1;
			} else {
				break;
			}

		}
		
	}
}

function attack(id, dir) {

		if (dir === 'u') {
			//console.log(field[tanks[id].row][tanks[id].col]);//tekusht tank na poleto
			for (let i = tanks[id].row; i >= 0; i--) {
				if (field[i][tanks[id].col] === DEBRI) {
					field[i][tanks[id].col] = EMPTY_FIELD;
					break;
				}
				 
				if ((field[i][tanks[id].col] !== id) && (field[i][tanks[id].col] >= 0)) {
					console.log(`Tank ${field[i][tanks[id].col]} is gg`);

					field[i][tanks[id].col] < 4 ? koceto = koceto - 1 : cuki = cuki - 1;
				
					field[i][tanks[id].col] = EMPTY_FIELD;
					break;
				}
				
			}
		}

		if (dir === 'd') {
			for (let i = tanks[id].row; i < row; i++) {
				if (field[i][tanks[id].col] === DEBRI) {
					field[i][tanks[id].col] = EMPTY_FIELD;
					break;
				}
				 
				if ((field[i][tanks[id].col] !== id) && (field[i][tanks[id].col] >= 0)) {
					console.log(`Tank ${field[i][tanks[id].col]} is gg`);

					field[i][tanks[id].col] < 4 ? koceto = koceto - 1 : cuki = cuki - 1;

					field[i][tanks[id].col] = EMPTY_FIELD;
					break;
				}
				
			}
			
		}

		if (dir === 'r') {
			for (let i = tanks[id].col; i < col; i++) {
				if (field[tanks[id].row][i] === DEBRI) {
					field[tanks[id].row][i] = EMPTY_FIELD;
					break;
				}
				 
				if ((field[tanks[id].row][i] !== id) && (field[tanks[id].row][i] >= 0)) {
					console.log(`Tank ${field[tanks[id].row][i]} is gg`);

					field[tanks[id].row][i] < 4 ? koceto = koceto - 1 : cuki = cuki - 1;

					field[tanks[id].row][i] = EMPTY_FIELD;
					break;
				}		
			}
		}

		if (dir === 'l') {
			for (let i = tanks[id].col; i >= 0; i--) {
				if (field[tanks[id].row][i] === DEBRI) {
					field[tanks[id].row][i] = EMPTY_FIELD;
					break;
				}
				 
				if ((field[tanks[id].row][i] !== id) && (field[tanks[id].row][i] >= 0)) {
					console.log(`Tank ${field[tanks[id].row][i]} is gg`);

					field[tanks[id].row][i] < 4 ? koceto = koceto - 1 : cuki = cuki - 1;

					field[tanks[id].row][i] = EMPTY_FIELD;
					break;
				}		
			}
		}
	}
}


solve([
    '10 10',
    '1 0;1 1;1 2;1 3;1 4;4 1;4 2;4 3;4 4',
    '8',
    'mv 4 9 u',
    'x 4 l',
    'x 4 l',
    'x 4 l',
    'x 0 r',
    'mv 0 9 r',
    'mv 5 1 r',
    'x 5 u'
]);


