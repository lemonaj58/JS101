let PerfectNumber = require('./perfect_number.js');

describe("PerfectNumber", () => {
  test("negative raises error", () => {
    // eslint-disable-next-line max-statements-per-line
    expect(() => { PerfectNumber.classify(-1) }).toThrow();
  });

  test("classify deficient", () => {
    expect(PerfectNumber.classify(13)).toEqual('deficient');
  });

  test("classify perfect", () => {
    expect(PerfectNumber.classify(28)).toEqual('perfect');
  });

  test("classify abundant", () => {
    expect(PerfectNumber.classify(12)).toEqual('abundant');
  });
});