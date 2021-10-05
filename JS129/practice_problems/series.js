class Series {
  constructor(number) {
    this.number = number;
  }
  slices(set) {
    let length = this.number.length;
    if (set > length || set < 1) {
      throw new Error('not a valid length');
    }
    return this.setArray(set, length);
  }

  setArray(set, length) {
    let setArray = [];
    let counter = 0;

    while (set <= length) {
      setArray.push(this.splitNumber(this.number.slice(counter, set)));
      counter += 1;
      set += 1;
    }
    return setArray;
  }

  splitNumber(array) {
    let newArray = array.split('').map(number => {
      return Number(number);
    });
    return newArray;
  }
}
let series = new Series('91274');
console.log(series.slices(4));

module.exports = Series;