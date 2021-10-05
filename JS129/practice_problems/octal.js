class Octal {
  constructor(number) {
    this.number = number;
  }

  getOctalNumbers() {
    let octalArray = [];
    let length = this.number.split('').length;
    for (let index = 0; index < length; index += 1) {
      octalArray.push(Math.pow(8, index));
    }
    return octalArray;
  }

  toDecimal() {
    if (!this.invalidChoices()) return 0;

    let octalNumber = this.getOctalNumbers();
    let numberArray = this.number.split('').reverse();
    let total = 0;
    numberArray.forEach((number, index) => {
      total += (number * octalNumber[index]);
    });

    return total;
  }

  invalidChoices() {
    return this.number.split('').every(char => char.match(/[0-7]/));
  }
}

let number = new Octal('1234');
console.log(number.toDecimal());

module.exports = Octal;