//split the word into seperate letters.
//split the arguement word into seperate letters.
//one letter at a time make sure that the original word has matched.
//if the origianl word does not have the certain letter or then stop.
//return each word that matches
//if no mathes are found return empty array.
//make sure that we are not case sensitive in anograms.

class Anagram {
  constructor(word) {
    this.word = word;
    this.wordArray = word.toLowerCase().split('');
  }

  match(array) {
    return array.filter(word => {
      if (word.toLowerCase() === this.word.toLowerCase()) {
        return false;
      }
      return (this.determineIfAnagram(word) && this.lengthMatch(word));
    });


  }

  determineIfAnagram(word) {
    let splitWord = word.toLowerCase().split('');
    let thisWord = this.wordArray.slice();

    let isAnagram = true;
    for (let index = 0; index < splitWord.length; index += 1) {
      let indexOfLetter = thisWord.indexOf(splitWord[index]);
      if (indexOfLetter >= 0) {
        thisWord.splice(indexOfLetter, 1);
      } else {
        isAnagram = false;
        break;
      }
    }
    return isAnagram;
  }

  lengthMatch(word) {
    return this.word.length === word.length;
  }

}

let detector = new Anagram('galea');
console.log(detector.match(['eagle']));

module.exports = Anagram;