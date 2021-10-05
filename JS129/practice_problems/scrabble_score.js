//create a constant object that lists all scores for letters
//keys are going to be scores, the values are going to
//be arrays including all the letters that belong.
//iterate through all of the word. then will add up
//the score by checking if a key includes the letter
const SCORINGS = {
  AEIOULNRST: 1,
  DG: 2,
  BCMP: 3,
  FHVWY: 4,
  K: 5,
  JX: 8,
  QZ: 10,
};

class ScrabblePoints {
  constructor(word) {
    this.word = word ? word.toUpperCase() : '';
    this.SCORINGS = SCORINGS;

  }

  static score(word) {
    return new ScrabblePoints(word).score();
  }

  searchForLetter(letter) {
    let keys = Object.keys(this.SCORINGS);
    let correctKey = keys.filter(key => key.split('').includes(letter));
    return correctKey[0];
  }

  giveValue(letter) {
    let key = this.searchForLetter(letter);
    return this.SCORINGS[key];
  }

  score() {
    let score = 0;
    if (this.word === '') return score;
    let word = this.word.split('');
    word.forEach(letter => {
      score += this.giveValue(letter);
    });
    return score;
  }
}


module.exports = ScrabblePoints;
