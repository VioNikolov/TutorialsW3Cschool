//Game of Trolls
function solve(args) {

let [row, col] = args[0].split(' ');
let field = [];
const TRAP = true;

//creating field for the traps
for (let i = 0; i < row; i++) {
  field[i] = [];
  for (var y = 0; y < col; y++) {
    field[i][y] = false;
    
  }
}

//splitting the second line from the input
let spl = args[1].split(';').map(x => x.split(' '));
spl = spl.map(x => x.map(x => Number(x)));

//creating trolls and princess
let trollW = {row: spl[0][0], col: spl[0][1], trapped: false};
let trollN = {row: spl[1][0], col: spl[1][1], trapped: false};
let princess = {row: spl[2][0], col: spl[2][1], trapped: false};


//commands
  for (let i = 2; i < args.length; i++) {
    if (args[i][0] === 'l') {
      field[princess.row][princess.col] = TRAP;
    }
    else {
      let command = args[i].split(' ');
      let unitToMove;

      //who is the current player (unitToMove)
      if (command[1][0] === 'L') {
        unitToMove = princess;
      }
      else if (command[1][0] === 'W') {
        unitToMove = trollW;
      }
      else if (command[1][0] === 'N') {
         unitToMove = trollN;
      }

      //check if trapped
      if (unitToMove.trapped === TRAP) { 
        break;
      }

      //if not trapped - move
      if (command[2] === 'u' && unitToMove.row > 0) {//check for field borders
        unitToMove.row -= 1;
      }
      else if (command[2] === 'd' && unitToMove.row < row - 1) {
        unitToMove.row += 1;
      }
      else if (command[2] === 'r' && unitToMove.col < col - 1) {
        unitToMove.col += 1;
      }
      else if (command[2] === 'l' && unitToMove.col > 0) {
        unitToMove.col -= 1;
      }

      //check if the trolls are in trap
      if (field[trollW.row][trollW.col] === true) {
        trollW.trapped = true;
      } 
      if (field[trollN.row][trollN.col] === true) {
        trollN.trapped = true;
      }

      //check if the trolls are releasing each other
      if (trollW.row === trollN.row && trollW.col === trollN.col) {
        if (trollN.trapped === true) {
          trollN.trapped = false;
        }
        if (trollW.trapped === true) {
          trollW.trapped = false;
        }
        field[trollW.row][trollW.col] = false;
      }
      

      //win conditions
      if (princess.row === row - 1 && princess.col === col - 1) { //princess escapes in the corner
        console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
      }
      else if (Math.abs(princess.row - trollW.row) < 2 && Math.abs(princess.col - trollW.col) < 2) { //troll around the princess
        console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
      }
      else if (Math.abs(princess.row - trollN.row) < 2 && Math.abs(princess.col - trollN.col) < 2) { //troll around the princess
        console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
      }
      else if (trollN.trapped && trollW.trapped) { //both trolls are in trap
        console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
      } 
    }    
  }
}


solve([
    '8 8',
    '1 3;0 3;5 5',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Wboup r',
    'mv Wboup r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Lsjtujzbo l',
    'mv Nbslbub d',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d'
]);


