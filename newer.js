// have object that gives percent of the option of the number,
// get the percentage of the
const moveListArray = [
  { human: 'rock', computer: 'scissors', winOrLose: true }];

let percentObj = {
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
    if (moveListArray[moveListArray.length - 1].winOrLose === true) {
      this.changePercentages(moveListArray[moveListArray.length - 1].computer);
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
  }
};


/* { human: 'paper', computer: 'scissors', winOrLose: false },
  { human: 'paper', computer: 'lizard', winOrLose: false },
  { human: 'rock', computer: 'paper', winOrLose: false },
  { human: 'rock', computer: 'rock', winOrLose: false },
  { human: 'rock', computer: 'spock', winOrLose: false },
  { human: 'rock', computer: 'paper', winOrLose: false },
  { human: 'rock', computer: 'rock', winOrLose: false },
  { human: 'paper', computer: 'rock', winOrLose: true },
  { human: 'scissors', computer: 'rock', winOrLose: false },
  { human: 'paper', computer: 'paper', winOrLose: false },
  { human: 'rock', computer: 'lizard', winOrLose: true },
  { human: 'paper', computer: 'paper', winOrLose: false },
  { human: 'scissors', computer: 'paper', winOrLose: true },
  { human: 'scissors', computer: 'lizard', winOrLose: true },
  { human: 'rock', computer: 'scissors', winOrLose: true },
  { human: 'rock', computer: 'paper', winOrLose: false },
  { human: 'paper', computer: 'scissors', winOrLose: false },
  { human: 'scissors', computer: 'scissors', winOrLose: false },
  { human: 'scissors', computer: 'lizard', winOrLose: true },
  { human: 'rock', computer: 'spock', winOrLose: false },
  { human: 'paper', computer: 'lizard', winOrLose: false },
  { human: 'scissors', computer: 'spock', winOrLose: false }
];
*/


percentObj.lastTurnCalc();


console.log(percentObj.moveArray);
console.log(percentObj);
console.log(percentObj.computerPickMove());