/* eslint-disable no-use-before-define */
class BeerSong {
  static verse(num) {
    return new Verse(num).singleVerse();
  }

  static verses(begin, end) {
    let currentVerse = begin;
    let result = [];

    while (currentVerse >= end) {
      result.push(`${this.verse(currentVerse)}`);
      currentVerse--;
    }

    return result.join("\n");
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

class Verse {
  constructor(bottles) {
    this.bottles = bottles;
  }

  singleVerse() {
    switch (this.bottles) {
      case 0:
        return this.zeroBottleVerse();
      case 1:
        return this.singleBottleVerse();
      case 2:
        return this.twoBottleVerse();
      default:
        return this.defaultVerse();
    }
  }

  defaultVerse() {
    return `${this.bottles} bottles of beer on the wall, ${this.bottles}` +
            ` bottles of beer.\nTake one down and pass it around, ` +
            `${this.bottles - 1} bottles of beer on the wall.\n`;
  }

  twoBottleVerse() {
    return `2 bottles of beer on the wall, 2 bottles of beer.\n` +
           `Take one down and pass it around, 1 bottle of beer ` +
           `on the wall.\n`;
  }

  singleBottleVerse() {
    return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
           `Take it down and pass it around, no more bottles of ` +
           `beer on the wall.\n`;
  }

  zeroBottleVerse() {
    return `No more bottles of beer on the wall, no more bottles ` +
           `of beer.\nGo to the store and buy some more, 99 bottles ` +
           `of beer on the wall.\n`;
  }
}

module.exports = BeerSong;