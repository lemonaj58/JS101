const rsync = require('readline-sync');

const WINNING_COMBOS = {
  scissors: ['paper'],
  rock: ['scissors'],
  paper: ['rock']
};

class RpsGame {
  constructor(human, computer) {
    this.human = createHuman();
    this.computer = createComputer();
  }

  displayWelcomeMessage() {
    console.log('welcome to Rock, Paper, Scissors!');
  }

  displayGoodByeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors');
  }

  displayMoves() {
    console.log(`You chose ${this.human.move}`);
    console.log(`The computer chose ${this.computer.move}`);
  }

  displayWinner() {
    this.displayMoves();
    if (WINNING_COMBOS[this.human.move].includes(this.computer.move)) {
      console.log('You win');
    } else if (this.human.move === this.computer.move) {
      console.log("IT's a tie!");
    } else {
      console.log('The computer wins!');
    }
  }

  playAgain() {
    let answer = rsync.question('Would you like to play again (y/n)');
    while (answer[0].toLowerCase() !== 'y' && answer[0].toLowerCase() !== 'n') {
      answer = rsync.question('please choose y/n.');
    }
    return answer[0].toLowerCase() === 'y';
  }

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodByeMessage();
  }

}