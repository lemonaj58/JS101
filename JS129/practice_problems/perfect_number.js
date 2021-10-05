/* eslint-disable consistent-return */
//gotta go through numbers with a for loop.
//the max a divisor can be is half of the number.
//go through and see if it can be devided and use the %
//to make sure it is a perfect devisor.
//use reduce to get the total of all the numbers of devisors.
//then make a switch case function to return whether it is one
// of the three.
// perfect is === devisors, //abundant > defient is <


class PerfectNumber {
  constructor(number) {
    this.number = number;
  }

  static classify(number) {
    return new PerfectNumber(number).classify();
  }

  getDevisors() {
    let devisorArray = [];
    let largestPossible = Math.floor(this.number / 2);
    for (let index = 1; index <= largestPossible; index += 1) {
      if (this.number % index === 0) devisorArray.push(index);
    }

    return devisorArray;
  }

  chooseOption(total) {
    if (total === this.number) return 'perfect';
    if (total > this.number) return 'abundant';
    if (total < this.number) return 'deficient';


  }

  classify() {
    if (this.number < 0) {
      throw new Error('please pick a valid number');
    }
    return this.chooseOption(this.getDevisors().
      reduce((number, accum) => accum + number), 0);

  }
}

module.exports = PerfectNumber;