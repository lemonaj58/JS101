const readline = require('readline-sync');

const RPSGAME = {
  human: createHuman(),
  computer: createComputer('computer'),

  humanScore: 0,
  computerScore: 0,

  moveListArray: [],

  creatNextMove() {

    this.moveListArray.push({human: this.human.move,
      computer: this.computer.move,
      winOrLose: this.humanWin()});
  },


  scoreBoard() {
    return {humanScore: this.humanScore, computerScore: this.computerScore};
  },

  displayScoreboard() {
    console.log(this.scoreBoard());
  },

  resetScoreboard() {
    this.humanScore = 0;
    this.computerScore = 0;
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
    return answer[0].toLowerCase() === 'y';
  },

  humanWin() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    return ((humanMove === 'rock' && computerMove === 'scissors') ||
    (humanMove === 'rock' && computerMove === 'lizard') ||
    (humanMove === 'paper' && computerMove === 'rock') ||
    (humanMove === 'paper' && computerMove === 'spock') ||
    (humanMove === 'scissors' && computerMove === 'paper') ||
    (humanMove === 'scissors' && computerMove === 'lizard') ||
    (humanMove === 'spock' && computerMove === 'rock') ||
    (humanMove === 'spock' && computerMove === 'scissors') ||
    (humanMove === 'lizard' && computerMove === 'paper') ||
    (humanMove === 'lizard' && computerMove === 'spock'));
  },
  computerWin() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    return ((computerMove === 'rock' && humanMove === 'scissors') ||
    (computerMove === 'rock' && humanMove === 'lizard') ||
    (computerMove === 'paper' && humanMove === 'rock') ||
    (computerMove === 'paper' && humanMove === 'spock') ||
    (computerMove === 'scissors' && humanMove === 'paper') ||
    (computerMove === 'scissors' && humanMove === 'lizard') ||
    (computerMove === 'spock' && humanMove === 'rock') ||
    (computerMove === 'spock' && humanMove === 'scissors') ||
    (computerMove === 'lizard' && humanMove === 'paper') ||
    (computerMove === 'lizard' && humanMove === 'spock'));
  },
  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (this.humanWin()) {
      console.log('You win!');
      this.humanScore += 1;
    } else if (this.computerWin()) {
      console.log('Computer wins!');
      this.computerScore += 1;
    } else {
      console.log("It's a tie");
    }
  },

  play () {
    this.displayWelcomeMessage();
    while (true) {
      while (this.humanScore < 5 && this.computerScore < 5) {

        this.displayScoreboard();
        this.human.choose();
        this.computer.choose();
        clearScreen();
        this.displayWinner();
        this.creatNextMove();
        console.log(this.moveListArray);
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
          (this.movePercentages[choice] / 100) - ((1 / this.counter) / 5);
      //I do not want the chance to ever get bellow 4 percent.
      //wanting to have at least a small chance(4%) to pick a certain move.
      if (this.movePercentages[choice] === 0) {
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
      if (RPSGAME.moveListArray[RPSGAME.moveListArray.length - 1].
        winOrLose === true) {
        this.changePercentages(
          RPSGAME.moveListArray[RPSGAME.moveListArray.length - 1].computer);
      }
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
      let randomIndex = Math.floor(Math.random() * movePercentagesArray.length);
      console.log(randomIndex);
      return movePercentagesArray[randomIndex];
    },

    choose() {
      if (this.counter > 1) {
        this.lastTurnCalc();
      }
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
        console.log('Please choose rock, paper, scissors, lizard, spock:');
        choice = readline.question();
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
    move: null,
  };
}


function clearScreen() {
  console.clear();
}

