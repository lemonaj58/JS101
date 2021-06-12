const readline = require('readline-sync');

const RPSGAME = {
  winningCombinations: {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors']
  },

  WINSCORE: 5,

  human: createHuman(),
  computer: createComputer('computer'),


  moveListArray: [],

  creatNextMove() {

    this.human.previousMoves.push(this.human.move);
    this.computer.previousMoves.push(this.computer.move);
  },

  displayScoreboard() {
    console.log(`Your score is ${this.human.score}, and the computer score is ${this.computer.score}`);
  },

  resetScoreboard() {
    this.human.score = 0;
    this.computer.score = 0;
  },

  displayWelcomeMessage() {
    console.log('Welcome to the game Rock, Paper, Scissors');
    console.log('The first one to win 5 times wins!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing, bye!');
  },

  playAgain() {
    let answer = readline.question('would you like to play again? (y/n): ');
    while (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n') {
      answer = readline.question('please enter either "y" for yes, or "n" for no');
    }
    return answer[0].toLowerCase() === 'y';
  },

  humanWin() {

    return this.winningCombinations[this.human.move].
      includes(this.computer.move);
  },
  computerWin() {
    console.log();

    return this.winningCombinations[this.computer.move].
      includes(this.human.move);
  },
  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (this.humanWin()) {
      console.log('You win!');
      this.human.score += 1;
    } else if (this.computerWin()) {
      console.log('Computer wins!');
      this.computer.score += 1;
    } else {
      console.log("It's a tie");
    }
  },

  play () {
    this.displayWelcomeMessage();
    while (true) {
      while (this.human.score < this.WINSCORE &&
              this.computer.score < this.WINSCORE) {

        this.displayScoreboard();
        this.human.choose();
        this.computer.choose();
        clearScreen();
        console.log(this.computer.movePercentages);
        this.displayWinner();
        this.creatNextMove();
      }
      this.displayScoreboard();
      if (!this.playAgain()) break;
      this.resetScoreboard();

    }
    this.displayGoodbyeMessage();
  },
};

RPSGAME.play();

// eslint-disable-next-line max-lines-per-function
function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    movePercentages: {
      rock: 20,
      paper: 20,
      scissors: 20,
      lizard: 20,
      spock: 20,
    },
    counter: 1,
    rppsl: ['paper', 'scissors', 'rock', 'spock', 'lizard'],
    changePercentages(choice) {
      const change = this.filterChoice(choice);
      let addingNumber = 0;
      let originalPercent = this.movePercentages[choice];
      this.movePercentages[choice] =
        (((this.movePercentages[choice] / 100)
         - ((1 / this.counter) / 5)) * 100);
      //I do not want the chance to ever get bellow 4 percent.
      //wanting to have at least a small chance(4%) to pick a certain move.
      if (this.movePercentages[choice] <= 0) {
        this.movePercentages[choice] = 4;
        addingNumber += ((originalPercent - this.movePercentages[choice]) / 4);

        for (let key in this.movePercentages) {
          if (change.includes(key)) {
            this.movePercentages[key] += addingNumber;
          }
        }
      }
      this.counter += 1;
    },

    filterChoice(choice) {
      let indexOf = this.rppsl.indexOf(choice);
      let nonMutate = this.rppsl.slice();
      nonMutate.splice(indexOf, 1);

      return nonMutate;

    },

    moveArray() {
      let array = [];
      this.rppsl.forEach(option => {
        for (let index = 1; index <= this.option; index += 1) {
          array.push(option);
        }
      });
      return array;
    },

    lastTurnCalc() {
      this.changePercentages(
        this.previousMoves[this.previousMoves.length - 1]);
    },

    movePercentagesArray() {
      let movePercentagesArray = [];
      for (let key in this.movePercentages) {
        for (let index = 1; index <= this.movePercentages[key]; index += 1) {
          movePercentagesArray.push(key);
        }
      }
      return movePercentagesArray;
    },

    computerPickMove() {
      let movePercentagesArray = this.movePercentagesArray();
      let randomIndex = Math.floor(Math.random() *
       Math.floor(movePercentagesArray.length));
      return movePercentagesArray[randomIndex];
    },

    choose() {
      if (this.counter > 1) {
        this.lastTurnCalc();
      }
      this.counter += 1;
      this.move = this.computerPickMove();
    }
  };
  return Object.assign(playerObject, computerObject);
}


function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;
      while (true) {
        console.log('r = rock, sc = scissors, p = paper, l = lizard, sp = spock');
        choice = readline.question('Please choose rock, paper, scissors, lizard, spock: ');
        choice = abreviations(choice);
        console.log(choice);
        if (['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }
      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createPlayer() {
  return {
    score : 0,
    move: null,
    previousMoves: []
  };
}

function abreviations(string) {
  switch (string) {
    case 'r':
      string = 'rock';
      break;
    case 'p':
      string = 'paper';
      break;
    case 'sc':
      string = 'scissors';
      break;
    case 'l':
      string = 'lizard';
      break;
    case 'sp':
      string = 'spock';
      break;
  }
  return string;
}


function clearScreen() {
  console.clear();
}

