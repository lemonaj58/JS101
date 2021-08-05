/*
Game (n)
Board (n)
Row (n)
Square (n)
Marker (n)
Player (n)
Mark (v)
Play (v)
Human (n)
Computer (n)
*/
const rsync = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}
class Square {
  static UNUSED_SQUARE() {
    return " ";
  }

  static HUMAN_MARKER () {
    return "X";
  }

  static COMPUTER_MARKER () {
    return "O";
  }
  toString() {
    return this.marker;
  }
  isUnused() {
    return this.marker === Square.UNUSED_SQUARE();
  }

  constructor(marker = Square.UNUSED_SQUARE()) {
    this.marker = marker;
  }
}


class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[String(counter)] = new Square();
    }
  }

  getMarker() {
    return this.marker;
  }

  // eslint-disable-next-line max-statements
  displayBoard() {
    let emptyRows = '   |   |   ';
    let midRow = '---+---+---';
    let firstRow = this.createMoveRow(this.squares['1'], this.squares['2'], this.squares['3']);
    let secondRow = this.createMoveRow(this.squares['4'], this.squares['5'], this.squares['6']);
    let thirdRow = this.createMoveRow(this.squares['7'], this.squares['8'], this.squares['9']);
    console.log(emptyRows);
    console.log(firstRow);
    console.log(emptyRows);
    console.log(midRow);
    console.log(emptyRows);
    console.log(secondRow);
    console.log(emptyRows);
    console.log(midRow);
    console.log(emptyRows);
    console.log(thirdRow);
    console.log(emptyRows);
  }
  createMoveRow(square1, square2, square3) {
    return ` ${square1} | ${square2} | ${square3} `;
  }

  markSquare(key, marker) {
    this.squares[key] = marker;
  }
  unusedSquare() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused);
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key] === player.marker;
    });

    return markers.length;
  }

}
//define rows, 3 x 3 board
//datastructures going to be object.
//how to get the starting squares? create a square?
//this is to make it so the row is initiated, then we can
//make multiple for first row, second row, third row.


class Player {
  constructor() {
    this.move = null;
  }
  validChoices(choice) {
    return this.squares[choice] === " ";
  }

  getMarker() {
    return this.marker;
  }

  //selecting move
  //constructor to make what type the player is
}

class Human extends Player {
  constructor() {
    super();
    this.marker = Square.HUMAN_MARKER();
  }
  askMove() {

    this.move = rsync.question('please pick a square: ');
    while (Number(this.move) < 1 && Number(this.move) > 9) {
      this.move = rsync.question('please select a valid square');
    }
  }
}
//figure a function to ask where we want to move.
//put the move into the board.
//determine the move.

class Computer extends Player {
  constructor() {
    super();
    this.marker = Square.COMPUTER_MARKER();
  }
  //make the computer choose a square determined by what is chosen with
  //the board already
  //select what he is o, or x
  //put the move into the board.
}

class Game {

  static POSSIBLE_WINNING_ROWS () {
    return [
      [ "1", "2", "3" ],            // top row of board
      [ "4", "5", "6" ],            // center row of board
      [ "7", "8", "9" ],            // bottom row of board
      [ "1", "4", "7" ],            // left column of board
      [ "2", "5", "8" ],            // middle column of board
      [ "3", "6", "9" ],            // right column of board
      [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
      [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
    ];
  }

  constructor() {
    this.human = new Human();
    this.computer = new Computer();
    this.board = new Board();
  }

  displayWelcomeMEssage() {
    prompt('welcome to tic, tac, toe!');
  }

  displayGoodbyeMessage() {
    prompt('Thanks for playing tic, tac, toe!');
  }

  gameOver() {
    return this.boardIsFull() || this.someoneWon();
  }

  boardIsFull() {
    let unusedSquares = this.board.unusedSquare();
    return unusedSquares.length === 0;
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("welp im a computer, and i beat you");
    } else {
      console.log("IT'S A CATS GAME!");
    }
  }

  isWinner(player) {
    return Game.POSSIBLE_WINNING_ROWS().some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  /**
   * this is for the human move.
   * @return {} return the human move marking on the board.
   */
  humanMoves() {
    while (true) {
      let validChoices = this.board.unusedSquare();
      prompt(`The valid choices are (${validChoices.join(", ")})`);
      this.human.askMove();
      if (validChoices.includes(this.human.move)) break;
    }
    this.board.markSquare(this.human.move, this.human.marker);

  }

  computerMoves() {
    let validChoices = this.board.unusedSquare();
    let choice;

    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
      this.computer.move = choice;
    } while (!validChoices.includes(choice));
    this.board.markSquare(this.computer.move, this.computer.marker);
  }


  play() {
    this.displayWelcomeMEssage();
    while (true) {
      this.board.displayBoard();
      this.humanMoves();
      console.clear();
      if (this.boardIsFull() || this.someoneWon()) break;
      this.computerMoves();
      this.board.displayBoard();
      if (this.boardIsFull() || this.someoneWon()) break;
    }
    this.displayResults();
    this.displayGoodbyeMessage();
  }


  //select both computer, and human
  //move with game asking human first then computer to choose
  //make it so we iterate through the board. determining the if someone won
  //have a while loop so if the game has winner we ask if they want to play
  //again
  //hello, goodbye function
}

let game = new Game();
game.play();
