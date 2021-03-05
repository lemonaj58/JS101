const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const rsync = require('readline-sync');

function prompt(string) {
  console.log(string);
}

function displayBoard(board) {

  let regLine = ('     |     |');
  let crossLine = ('-----+-----+-----');
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
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
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function playerChooseSquare(board) {
  let square;


  while (true) {
    square = rsync.question(`please choose a square (${joinOr(emptySquares(board))}): `);
    if (emptySquares(board).includes(square)) break;
    else {
      prompt('sorry that is not a valid choice');
    }
  }
  board[square] = HUMAN_MARKER;

}

function computerChoosesSquare(board) {

  let randomChoice = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomChoice];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}
// eslint-disable-next-line max-lines-per-function
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}
function joinOr(array, ending, word) {
  let returnedArray = [];
  let length = array.length - 1; // for the second last number

  for (let index = 0; index < array.length; index += 1) {
    if (index === length) {
      returnedArray = putPrefixesInArray(returnedArray, ending, word);
      returnedArray[length] += ` ${array[index]}`;
    } else {

      returnedArray.push(array[index]);

    }
  }
  return (returnedArray.join(", "));
}
function putPrefixesInArray(returnedArray, ending, word) {
  let lastIndex = (returnedArray.length - 1);
  if (ending !== undefined && word !== undefined) {
    returnedArray[lastIndex] += ending;
    returnedArray.push(word);

  } else if (ending !== undefined) {
    returnedArray[lastIndex] += ending;
    returnedArray.push('or');

  } else if (word !== undefined) {
    returnedArray.push(word);


  } else {
    returnedArray.push('or');


  }
  return returnedArray;
}

function keepScore() {
  let scoreBoard = {player: 0, computer: 0};
  if (someoneWon(board)) {
    if (detectWinner(board) === 'Player') {
      scoreBoard['player'] += 1
    } else {
      scoreBoard['player'] += 1
    }

  }
  console.log(scoreBoard);
}

while (true) {
  let board = initializeBoard();
  let playerWin = 0;
  let computer

  while (true) {
    displayBoard(board);

    playerChooseSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
    someoneWon(board);
    boardFull(board);
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
    someoneWon(board);
    boardFull(board);
    displayBoard(board);

  }

  displayBoard(board);
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a cats game!");
  }

  let answer = rsync.question('Play again? (y or n)');
  if (answer !== 'y') break;

}

prompt('thanks for playing tic tac toe!');