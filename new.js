/* eslint-disable max-statements */
class Square {

  toString() {
    return this.marker;
  }

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }
}
Square.UNUSED_SQUARE = " ";
Square.HUMAN_MARKER = "X";
Square.COMPUTER_MARKER = "O";


class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[String(counter)] = new Square();
    }
  }

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
}

let board = new Board();

board.displayBoard();