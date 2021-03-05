const rsync = require('readline-sync');
let board = {
  1: 1, // top left
  2: 2, // top center
  3: 3, // top right
  4: 4, // middle left
  5: 5, // center
  6: 6, // middle right
  7: 7, // bottom left
  8: 8, // bottom center
  9: 9, // bottom right
};

function displayBoard(board, playerTile, computerTile) {
  let regLine = ('     |     |');
  let crossLine = ('-----+-----+-----');

  console.clear();
  console.log(`you are playing ${playerTile} and the computer is playing ${computerTile}`);
  console.log(`${regLine}`);
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log(`${regLine}`);
  console.log(`${crossLine}`);
  console.log(`${regLine}`);
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log(`${regLine}`);
  console.log(`${crossLine}`);
  console.log(`${regLine}`);
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log(`${regLine}`);

}

function chooseTile() {
  let xOrO = ' ';
  let number = rsync.question("for deciding if you're X or O please pick the number 1 or 2 ==> ");
  while (number !== '1' && number !== '2') {
    number = rsync.question('please pick either the number 1 or 2: ');
  }
  let randomNumber = Math.ceil(Math.random() * 2);
  if (Number(number) === randomNumber) {
    xOrO = 'X';
  } else {
    xOrO = 'O';
  }
  return xOrO;
}

function computerTiles(playerTile) {
  let computerTile;
  if (playerTile === 'X') {
    computerTile =  'O';
    return computerTile;
  } else {
    computerTile = 'X';
    return computerTile;
  }
}

function displayTile(playerTile, computerTile) {
  console.log(`you are playing ${playerTile}, and computer is playing ${computerTile}`);
  console.log("'X' goes first.");
}

function askWhere(board) {
  let square = rsync.question('Where do you want to play? ==> ');
  while (isNaN(Number(square)) || Number(square) < 1 || Number(square) > 9) {
    square = rsync.question('please pick a valid square, 1-9. ==> ');
  }

  while (board[square] === 'X' || board[square] === 'O') {
    square = rsync.question('Please pick a square that is empty. ==> ');
  }
  return square;
}

function fillBox(square, playerTile, board) {
  board[square] = playerTile;
  return board;
}

function computerPlay(board, computerTile) {
  let randomTile = Math.ceil(Math.random() * 9);
  while (board[randomTile] === 'X' || board[randomTile] === 'O') {
    randomTile = Math.ceil(Math.random() * 9);
  }
  board[randomTile] = computerTile;
  return board;
}

function choosingWinner(board, computerTile, playerTile) {
  let winningChoices = [
    [1, 2, 3], [1, 4, 7], [1, 5, 9],
    [2, 5, 8], [3, 5, 7], [3, 6, 9],
    [4, 5, 6], [7, 8, 9]
  ];
  let winner = false;
  winningChoices.forEach(array => {

    if (board[array[0]] === playerTile && board[array[1]] === playerTile &&
      board[array[2]] === playerTile) {
      winner = 'player wins';

    } else if (board[array[0]] === computerTile &&
      board[array[1]] === computerTile &&
      board[array[2]] === computerTile) {
      winner = 'computer wins';

    }
  });
  return winner;
}


function isCatsGameOrNot(board) {
  let catsGame = false;
  for (let square = 1; square <= 9; square += 1) {
    if (typeof board[square] === 'number') {
      catsGame = false; //actually means false, but returns true for loop.
      break;
    } else {
      catsGame = true;
    }
  }
  return catsGame;
}


function resetBoard(board) {
  for (let index = 1; index <= 9; index += 1) {
    board[index] = index;
  }

}


while (true) {
  let playerTile = chooseTile();
  let computerTile = computerTiles(playerTile);
  let winner = false;
  let catsGame = false;
  let answer = ' ';
  displayTile(playerTile, computerTile);
  while (true) {
    if (playerTile === 'X') {
      displayBoard(board, playerTile, computerTile);
      let square = askWhere(board, playerTile);
      fillBox(square, playerTile, board);
      catsGame = isCatsGameOrNot(board);
      winner = choosingWinner(board, computerTile, playerTile);
      if (winner || catsGame) break;

      computerPlay(board, computerTile);
      catsGame = isCatsGameOrNot(board);
      winner = choosingWinner(board, computerTile, playerTile);
      if (winner || catsGame) break;

    } else {
      computerPlay(board, computerTile);
      displayBoard(board, playerTile, computerTile);
      winner = choosingWinner(board, computerTile, playerTile);
      catsGame = isCatsGameOrNot(board);
      if (winner || catsGame) break;

      let square = askWhere(board, playerTile);
      fillBox(square, playerTile, board);
      winner = choosingWinner(board, computerTile, playerTile);
      catsGame = isCatsGameOrNot(board);
      if (winner || catsGame) break;

    }

  }
  if (winner !== false) {
    console.log(`${winner}`);
  } else {
    console.log("It's a cats game!");
  }
  answer = rsync.question('do you want to play again? please answer y/n: ');
  while (answer[0].toLowerCase() !== 'n' && answer[0].toLowerCase() !== 'y') {
    answer = rsync.question('please pick a valid response, yes, or no: ');
  }
  if (answer[0].toLowerCase() === 'n') {
    break;
  }
  resetBoard(board);
}
