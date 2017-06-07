//maze
function solve(args) {

  let [row, col] = args[0].split(' ').map(x => Number(x));
  const VISITTED = -1;

  //creating field
  let field = [];
  for (let i = 0; i < row; i++) {
    args[i] = args[i + 1].split(' ');
    
    field[i] = [];
    for (let y = 0; y < col; y++) {
      field[i][y] = Number(args[i][y]);
      
    }
    
  }
  //finding the starting position and setting player's coords there (the center)
  let player = {row: Math.round(row/2) - 1, col: Math.round(col/2) - 1};


  while (true) {
  let binary = (field[player.row][player.col]).toString(2);//make it to binary with 0's
  if (binary.length < 4) {

    for (var i = binary.length; i < 4; i++) {
      binary = '0' + binary
    }
    
  }

  //directions and move
    if ((binary[3] === '1') && (field[player.row - 1][player.col] !== VISITTED)) { //up
      field[player.row][player.col] = VISITTED;
      player.row -= 1;
      if (player.row === 0) {
        console.log(`No rakiya, only JavaScript ${player.row} ${player.col}`);
        break;
      }
    }
    else if ((binary[2] === '1') && (field[player.row][player.col + 1] !== VISITTED)) { //right
      field[player.row][player.col] = VISITTED;
      player.col += 1;
      if (player.col === col - 1) {
        console.log(`No rakiya, only JavaScript ${player.row} ${player.col}`);
        break;
      }
    }
    else if ((binary[1] === '1') && (field[player.row + 1][player.col] !== VISITTED)) { //down
      field[player.row][player.col] = VISITTED;
      player.row += 1;
      if (player.row === row - 1) {
        console.log(`No rakiya, only JavaScript ${player.row} ${player.col}`);
        break;
      }
    }
    else if ((binary[0] === '1') && (field[player.row][player.col - 1] !== VISITTED)) { //left
      field[player.row][player.col] = VISITTED;
      player.col -= 1;
      if (player.col === 0) {
        console.log(`No rakiya, only JavaScript ${player.row} ${player.col}`);
        break;
      }
      
    }
    else {
      console.log(`No JavaScript, only rakiya ${player.row} ${player.col}`);
      break;
    }
    

    if (player.row === 0 || player.row === row - 1 || player.col === 0 || player.col === col - 1) {
      console.log(`No rakiya, only JavaScript ${player.row} ${player.col}`);
      break;
    }
  }

}
    



solve([
    '5 7',
    '9 5 3 11 9 5 3',
    '10 11 10 12 4 3 10',
    '10 10 12 7 13 6 10',
    '12 4 3 9 5 5 2',
    '13 5 4 6 13 5 6'
]);


