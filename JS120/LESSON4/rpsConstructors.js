const rsync = require('readline-sync');

function RpsGame() {
  this.human = new Human();
  this.computer = new Computer();
  this.winningCombos = {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper']
  };
  this.choices = ['rock', 'paper', 'scissors'];

}
RpsGame.prototype = {
  displayWelcomeMessage() {
    console.log('welcome to Rock, Paper, Scissors');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, scissors');
  },

  displayWinner() {
    console.log(`You chose ${this.human.move}`);
    console.log(`The computer chose ${this.computer.move}`);

    if (this.winningCombos[this.human.move].includes(this.computer.move)) {
      console.log('You win!');
    // eslint-disable-next-line max-len
    } else if (this.winningCombos[this.computer.move].includes(this.computer.move)) {
      console.log('The computer wins!');
    } else {
      console.log("it's a tie!");
    }
  },

  playAgain() {
    let answer = rsync.question('Do you want to play again? (y/n)');
    while (answer !== 'y' && answer !== 'n') {
      answer = rsync.question('Do you want to play again? please choose y / n');
    }
  },

  play: function() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

function Player() {
  this.move = null;
  this.choices = ['rock', 'paper', 'scissors'];
}

function Human() {
  Player.call(this);
}

Human.prototype.choose = function () {

  let choice;

  while (true) {
    choice = rsync.question('please choose rock, paper, scissors: ');
    if (this.choices.includes(choice)) break;

    console.log(choice);
  }
  this.move = choice;
};

function Computer() {
  Player.call(this);
}

Computer.prototype.choose = function() {
  let randomIndex = Math.floor(Math.random() * this.choices.length);
  this.move = this.choices[randomIndex];
};

RpsGame.prototype.constructor = RpsGame;


let game = new RpsGame();
game.play();