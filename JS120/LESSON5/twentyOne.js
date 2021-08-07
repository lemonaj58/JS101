const rsync = require('readline-sync');
//used if the player has an ace and is over 21, will subtract 10.
const ACE_VALUE_SET_TO_ONE = 10;

//The value where we cannot go over.
const BUSTED_VALUE = 21;

//this is what we are going to iterate through for our deck
let deckObj = {
  A: 4,
  2: 4,
  3: 4,
  4: 4,
  5: 4,
  6: 4,
  7: 4,
  8: 4,
  9: 4,
  10: 4,
  J: 4,
  Q: 4,
  K: 4,
};

//This is the value of all of the cards, keys are cards,
//the values are what they're worth
const VALUE_OF_CARDS = {
  A: 11,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
};

class Deck {
  constructor() {

  }

  //used to iterate through all 52 cards in random making a shuffled deck.
  static shuffleDeck() {
    let deckArray = [];
    while (deckArray.length !== 52) {
      let randomNumber = Math.floor(Math.random() * 13);
      let choices = Object.keys(deckObj);
      if (deckObj[choices[randomNumber]] > 0) {
        deckArray.push(choices[randomNumber]);
        deckObj[choices[randomNumber]] -= 1;
      }
    }

    return deckArray;
  }
  //resets deck so next time the deck is used,
  //all of the cards have 4 copies for each suit.
  static resetDeck() {
    let cards = Object.keys(deckObj);
    cards.forEach(card => {
      deckObj[card] = 4;
    });

  }

}

//going to use the players for the dealer and human
class Players {
  constructor() {
    this.money = 5;
    this.hand = [];
  }

  //calculate total of hand, while hasAce() will make sure that
  //if a player has an ace, it will calculate that correctly.
  total() {
    let total = 0;
    this.hand.forEach(card => {
      total += VALUE_OF_CARDS[card];

    });
    if (this.hasAce()) {
      let aceArray = this.hand.filter(card => card === 'A');

      while (total > 21) {
        total -= ACE_VALUE_SET_TO_ONE;
        aceArray.pop();

        if (aceArray.length === 0) break;
      }
    }
    return total;
  }

  hasAce(total) {
    return total > BUSTED_VALUE;
  }


  isBusted() {
    let total = this.total();
    return total > BUSTED_VALUE;
  }


  clearHands() {
    this.hand = [];
  }
}


class Dealer extends Players {
  constructor() {
    super();
  }

  showFullHand() {
    console.log(`the dealers cards are${this.hand.map(card => ' ' + card)}. The dealers total is ${this.total()}`);
  }

  // This function is used at the begining of the turn, so the player
  //does not know the dealers total.
  showInitialHand() {
    console.log(`the dealer hand is a ${this.hand.map((card, index) => {
      if (index === 0) {
        return 'hidden card and';
      } else {
        return ' ' + card;
      }
    })}`);
  }

  //this is to distribute the hand to the players. mutating the deck
  //and adding the cards to the certain player.
  deal() {
    let counter = 0;
    while (counter < 2) {
      this.human.hand.push(this.currentDeck.pop());
      this.dealer.hand.push(this.currentDeck.pop());
      counter += 1;
    }
  }

  nextCard() {
    let nextCard = this.currentDeck.pop();
    console.log(nextCard);
    if (nextCard) this.human.hand.push(nextCard);
    else {
      this.currentDeck = Deck.shuffleDeck();
      Deck.resetDeck();
      nextCard = this.currentDeck.pop();
      this.human.hand.push(nextCard);
    }
  }

  nextCardDealer() {
    let nextCard = this.currentDeck.pop();
    console.log(nextCard);
    if (nextCard) this.dealer.hand.push(nextCard);
    else {
      this.currentDeck = Deck.shuffleDeck();
      Deck.resetDeck();
      nextCard = this.currentDeck.pop();
      this.dealer.hand.push(nextCard);
    }
  }

}

class Human extends Players {

  //asking the player if they want another card or not.
  HitOrStay() {
    while (true) {
      let answer = rsync.question('Do you want to hit, or stay?: ');
      while (answer.toLowerCase() !== 'hit' && answer.toLowerCase() !== 'stay') {
        answer = rsync.question('please choose hit, or stay: ');
      }
      return answer.toLowerCase() === 'hit';
    }
  }
  //displaying total, with hand.
  showHandWhileHitting() {
    console.log(`your cards are${this.hand.map(card => ' ' + card)}. your total is ${this.total()}`);
  }
  //just displaying hand.
  showInitialHand() {
    console.log(`your cards are ${this.hand.map(card => ' ' + card)}.`);
  }
}


class TwentyOne {
  constructor() {
    this.human = new Human();
    this.dealer = new Dealer();
    this.deck = new Deck();
    //this will be our deck array, where we will have the top cards
    //on the botttom while our this.deck will perform the functions on it.
    this.currentDeck = [];
  }

  shuffleDeck() {
    this.currentDeck = Deck.shuffleDeck();
    Deck.resetDeck();
  }

  displayWelcomeMessage() {
    console.log('welcome to 21, try not to go over 21');
  }

  displayGoodbyeMessage() {
    if (this.human.money > this.dealer.money) {
      console.log('thanks for playing! The dealer is now broke!');
    } else {
      console.log('thanks for playing better luck next time!');
    }
  }

  displayHands() {
    this.dealer.showInitialHand();
    this.human.showInitialHand();
  }

  displayHandsWhileHitting() {
    this.dealer.showInitialHand();
    this.human.showHandWhileHitting();
  }

  displayFinalHands() {
    this.human.showHandWhileHitting();
    this.dealer.showFullHand();
  }

  //loops until the human does not want to hit anymore, or busts
  humanHitOrStay() {
    while (this.human.HitOrStay()) {

      console.clear();
      this.showMoney();
      this.dealer.nextCard.call(this);
      this.displayHandsWhileHitting();

      //if (this.human.isBusted()) break;

    }
  }
  //displays totals and hands of both players, while going until
  //the dealer reaches 17 or until he busts.
  dealerPlay() {
    let total = this.dealer.total();
    console.clear();
    while (total < 17) {
      console.clear();
      this.dealer.nextCardDealer.call(this);

      total = this.dealer.total();
      this.displayFinalHands();
      this.showMoney();

      while (true) {
        rsync.question('press "enter" to continue.');
        break;
      }
    }
  }

  chooseWinner() {
    if (this.human.isBusted()) {
      return 'dealer';
    } else if (this.dealer.isBusted()) {
      return 'you';
    } else {
      return (this.human.total() > this.dealer.total() ? 'you' : 'dealer');
    }

  }
  displayWinner() {
    let winner = this.chooseWinner();
    if (winner === 'dealer') {
      console.log(`The ${winner} has won, and you lose one dollar.`);
    } else {
      console.log(`${winner} have won the hand, and you get one dollar!`);
    }
  }


  displayEnding() {
    this.displayFinalHands();
    this.displayWinner();
  }

  clearHands() {
    this.dealer.clearHands();
    this.human.clearHands();
  }

  payUp() {
    if (this.chooseWinner() === 'dealer') {
      this.dealer.money += 1;
      this.human.money -= 1;
    } else {
      this.dealer.money -= 1;
      this.human.money += 1;
    }
  }

  showMoney() {
    console.log(`you have $${this.human.money} and the dealer has $${this.dealer.money}`);
  }


  play() {
    while (this.dealer.money !== 10 && this.human.money !== 10) {
      while (true) {
        this.showMoney();
        this.shuffleDeck();
        this.dealer.deal.call(this);
        this.displayHands();
        this.humanHitOrStay();
        if (this.human.isBusted()) break;
        this.dealerPlay();
        console.clear();
        break;
      }
      this.displayEnding();
      this.payUp();
      this.clearHands();
    }
    this.displayGoodbyeMessage();
  }
}

let game = new TwentyOne();
game.play();