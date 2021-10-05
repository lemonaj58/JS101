class SumOfMultiples {
  constructor(...args) {
    this.args = [...args];
  }

  static to(number) {
    return new SumOfMultiples(3, 5).to(number);
  }

  to(number) {
    let used = [];
    return this.args.map(arg => {
      let multiples = [];
      for (let index = arg; index < number; index += arg) {
        if (!used.includes(index)) {
          multiples.push(index);
          used.push(index);
        }
      }
      if (multiples.length === 0) return 0;
      return multiples.reduce((number, accum) => number + accum, 0);
    }).reduce((number, accum) => number + accum, 0);
  }

}

module.exports = SumOfMultiples;