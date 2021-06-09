const TURN_LIST = [
  { human: 'rock', computer: 'scissors', winOrLose: true },
  { human: 'paper', computer: 'scissors', winOrLose: false },
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

function calculateCompTurn(array) {
  let rockCounter = 0;
  let lizardCounter = 0;
  let paperCounter = 0;
  let spockCounter = 0;
  let scissorCounter = 0;
  array.forEach(obj => {
    let add = keepTrackOfLosses(obj.winOrLose, obj.computer);
    if (add === 'rockCounter') {
      rockCounter += 1;
    } else if (add === 'paperCounter') {
      paperCounter += 1;
    } else if (add === 'scissorCounter') {
      scissorCounter += 1;
    } else if (add === 'spockCounter') {
      spockCounter += 1;
    } else if (add === 'lizardCounter') {
      lizardCounter += 1;
    }
  });
  pickTurn(rockCounter, lizardCounter, paperCounter, spockCounter, scissorCounter, 23);
}


function pickTurn(rock, paper, scissors, lizard, spock, counter) {
  let rockPercent = 20 - Math.floor(20 * (rock / counter));
  let paperPercent = 20 - Math.floor(20 * (paper / counter));
  let scissorsPercent = 20 - Math.floor(20 * (scissors / counter));
  let lizardPercent = 20 - Math.floor(20 * (lizard / counter));
  let spockPercent = 20 - Math.floor(20 * (spock / counter));
  let choiceArray = [];

  pushItemsToArray(choiceArray, rockPercent, 'rock');
  pushItemsToArray(choiceArray, paperPercent, 'paper');
  pushItemsToArray(choiceArray, scissorsPercent, 'scissors');
  pushItemsToArray(choiceArray, lizardPercent, 'lizard');
  pushItemsToArray(choiceArray, spockPercent, 'spock');
  console.log(choiceArray);

  console.log(choiceArray[Math.floor(Math.random() * choiceArray.length)]);
}

function pushItemsToArray(array, times, item) {
  for (let index = 1; index <= times; index += 1) {
    array.push(item);
  }
}
function keepTrackOfLosses(winLoss, computer) {

  switch (true) {
    case (winLoss === true && computer === 'rock'):
      return 'rockCounter';

    case (winLoss === true && computer === 'paper'):
      return 'paperCounter';

    case (winLoss === true && computer === 'scissors'):
      return 'scissorCounter';

    case (winLoss === true && computer === 'lizard'):
      return 'lizardCounter';

    case (winLoss === true && computer === 'spock'):
      return 'spockCounter';
    default:
      return undefined;
  }

}


calculateCompTurn(TURN_LIST);