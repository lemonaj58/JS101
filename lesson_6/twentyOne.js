const rsync = require('readline-sync');
const AMOUNT_OF_SUITES = 4;
const FACE_CARD_VALUES_IN_DECK = {11: 'jack',
  12: 'queen',
  13: 'king',
  14: 'ace'};

const CARD_VALUE = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  jack: 10,
  queen: 10,
  king: 10,
  ace: 11
};


let deck = {
  2: AMOUNT_OF_SUITES,
  3: AMOUNT_OF_SUITES,
  4: AMOUNT_OF_SUITES,
  5: AMOUNT_OF_SUITES,
  6: AMOUNT_OF_SUITES,
  7: AMOUNT_OF_SUITES,
  8: AMOUNT_OF_SUITES,
  9: AMOUNT_OF_SUITES,
  10: AMOUNT_OF_SUITES,
  jack: AMOUNT_OF_SUITES,
  queen: AMOUNT_OF_SUITES,
  king: AMOUNT_OF_SUITES,
  ace: AMOUNT_OF_SUITES
};

//GAME SETUP FUNCTIONS
function shuffleDeck(deck) {
  let shuffledDecks = [];
  let numberOfCardsInDeck = 1;
  while (numberOfCardsInDeck <= 52) {
    let randomNumber = Math.ceil((Math.random() * 13) + 1);
    randomNumber = determineCard(randomNumber);
    if (deck[randomNumber] > 0) {
      shuffledDecks.push(randomNumber);
      numberOfCardsInDeck += 1;
      deck[randomNumber] -= 1;
    }
  }

  return shuffledDecks;
}
function determineCard(randomNumber) {
  if (randomNumber > 10) {
    randomNumber = FACE_CARD_VALUES_IN_DECK[randomNumber];
    return randomNumber;

  } else {
    return randomNumber;
  }
}

function bust(total) {
  return total > 21;
}

function deal(playingDeck, arr) {
  let topCard = playingDeck[playingDeck.length - 1];
  arr = arr.push(topCard);
  playingDeck.pop();
  return arr;
}

function startDealing(playingDeck, playerHand, dealerHand) {
  while (dealerHand.length < 2) {
    deal(playingDeck, playerHand);
    deal(playingDeck, dealerHand);
  }
}

//PLAYERHAND\
function showPlayerHand(playerHand) {
  let cardString = 'your hand is ';
  for (let cards = 0; cards < playerHand.length; cards += 1) {
    if (cards === playerHand.length - 1) {
      cardString += 'and ' + `${playerHand[cards]}.`;
    } else {
      cardString += `${playerHand[cards]}` + ', ';
    }
  }
  console.log(cardString);
  displayTotal(playerHand);
}
function calculateHand(hand) {
  let total = 0;
  hand = hand.sort((a, b) => CARD_VALUE[a] - CARD_VALUE[b]);
  for (let card = 0; card < hand.length; card += 1) {
    total += Number(CARD_VALUE[hand[card]]);
    if (total > 21 && hand[card] === 'ace') {
      total -= 10;
    }
  }
  return total;
}

function initializeHand() {
  return [];
}

function initializeScoreBoard() {
  return {playerScore: 0, dealerScore: 0};
}

function hitOrStay(playerHand, playingDeck) {
  let playerTotal = calculateHand(playerHand);
  let hitOrStay = askHitOrStay();
  while (hitOrStay[0].toLowerCase() === 'h') {
    deal(playingDeck, playerHand);
    showPlayerHand(playerHand);
    playerTotal = calculateHand(playerHand);

    console.log(calculateHand(playerHand));
    if (bust(calculateHand(playerHand)) === true) {
      console.log('you went over 21, you lose.');
      break;
    }
    askHitOrStay();

  }
  return playerTotal;
}
function askHitOrStay() {
  let hitOrStay = rsync.question('do you want to hit, or stay? ');
  while (hitOrStay.toLowerCase()[0] !== 'h' && hitOrStay.toLowerCase()[0] !== 's') {
    hitOrStay = rsync.question('Please pick either (h)it or (s)tay. ');
  }
  return hitOrStay;
}

//DISPLAY FUNCTIONS
function displayBothHands(playerHand, dealerHand) {
  showPlayerHand(playerHand);
  displayDealerHand(dealerHand);
}

function displayTotal (hand) {
  let total = calculateHand(hand);
  console.log(`The total is ${total}`);
}

//KEEPING SCORE

function keepScore(winner, scoreBoard) {
  if (winner === 'you') {
    scoreBoard.playerScore += 1;
    return scoreBoard;
  } else {
    scoreBoard.dealerScore += 1;
    return scoreBoard;
  }
}

function displayScoreBoard(scoreBoard) {
  console.log(scoreBoard);
}

function displayingWinner(scoreBoard) {
  if (scoreBoard.dealerScore === 5) {
    console.log('The dealer has won the game!');
  } else {
    console.log('You have won the game!');
  }
}

//DEALER FUNCTIONS
function dealerHitOrStay(dealerHand, playingDeck) {
  while (calculateHand(dealerHand) < 17) {
    deal(playingDeck, dealerHand);
  }
  return dealerHand;
}
function displayDealerHand(playerHand) {
  let cardString = 'the dealer hand is ';
  for (let cards = 0; cards < playerHand.length; cards += 1) {
    if (cards === playerHand.length - 1) {
      cardString += 'and ' + `${playerHand[cards]}.`;
    } else {
      cardString += `${playerHand[cards]}` + ', ';
    }
  }
  console.log(cardString);
  displayTotal(playerHand);
}
function showDealerHand(dealerHand) {
  let dealerString = 'the dealers hand is ';
  for (let cards = 0; cards < dealerHand.length; cards += 1) {
    if (cards === 0) {
      dealerString += `${dealerHand[cards]}` + ', ';
    } else {
      dealerString += 'uknown. ';
    }
  }
  console.log(dealerString);
}
function pickingWinner(playerTotal, dealerTotal) {
  let winner;
  if (dealerTotal > 21) {
    winner = 'you';
  } else if (playerTotal < dealerTotal) {
    winner = 'dealer';
  } else {
    winner = 'you';
  }
  if (winner === 'you') {
    console.log(`the dealers total is ${dealerTotal} and your total is ${playerTotal}`);
    console.log('You have won the hand!');
  } else {
    console.log(`the dealers total is ${dealerTotal} and your total is ${playerTotal}`);
    console.log('The dealer has won the hand!');
  }
  return winner;
}

//END GAME FUNCTION / CLEANUP
function playAgain() {
  let answer = rsync.question('Do you want to play again? (y or n) ');
  while (answer.toLowerCase()[0] !== 'y' && answer.toLowerCase()[0] !== 'n') {
    answer = rsync.question('please answer, either (y)es or (n)o. ');
  }
  return answer.toLowerCase()[0] === 'y';
}


function reset(deck, playerHand, dealerHand, playingDeck) {
  playerHand = [];
  dealerHand = [];
  playingDeck = [];
  let cards = Object.keys(deck);
  for (let card = 0; card < cards.length; card += 1) {
    deck[(cards[card])] = 4;
  }
  return (playerHand, dealerHand, playingDeck, deck);
}

function clearScreen() {
  console.clear();
}

while (true) {
  let scoreBoard = initializeScoreBoard();
  while (scoreBoard.dealerScore < 5 && scoreBoard.playerScore < 5) {
    let winner;
    let playingDeck = shuffleDeck(deck);
    let playerHand = initializeHand();
    let dealerHand = initializeHand();
    while (true) {
      displayScoreBoard(scoreBoard);
      startDealing(playingDeck, playerHand, dealerHand);
      showPlayerHand(playerHand);
      showDealerHand(dealerHand);
      let playerTotal = hitOrStay(playerHand, playingDeck);
      clearScreen();
      if (bust(playerTotal) === true) {
        winner = 'dealer';
        break;
      }
      dealerHitOrStay(dealerHand, playingDeck);
      let dealerTotal = calculateHand(dealerHand);
      displayBothHands(playerHand, dealerHand);
      winner = pickingWinner(playerTotal, dealerTotal);

      break;
    }
    keepScore(winner, scoreBoard);
    reset(deck, playerHand, dealerHand, playingDeck);
  }
  console.log(scoreBoard);
  displayingWinner(scoreBoard);
  if (!playAgain()) break;
}