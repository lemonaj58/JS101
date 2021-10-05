/* eslint-disable max-statements-per-line */
/* eslint-disable no-new */
/* eslint-disable max-lines-per-function */
const Triangle = require('./triangles.js');

describe("Traingle", () => {
  test('equilateral traingles have equal sides', () => {
    let triangle = new Triangle(2, 2, 2);
    expect(triangle.kindOfTriangle()).toEqual('equilateral');
  });

  test('later equilateral triangles aslo have equal sides', () => {
    let triangle = new Triangle(10, 10, 10);
    expect(triangle.kindOfTriangle()).toEqual('equilateral');
  });

  test('isosceles triangles work and return isosceles triangles', () => {
    let triangle = new Triangle(3, 4, 4);
    expect(triangle.kindOfTriangle()).toEqual('isosceles');
  });

  test('larger isosceles triangles work also', () => {
    let triangle = new Triangle(10, 10, 2);
    expect(triangle.kindOfTriangle()).toEqual('isosceles');
  });

  test('same sides in different order still works with isosceles triangles', () => {
    let triangle = new Triangle(4, 3, 4);
    expect(triangle.kindOfTriangle()).toEqual('isosceles');
  });

  test('one last time changing order for isosceles triangles', () => {
    let triangle = new Triangle(4, 4, 3);
    expect(triangle.kindOfTriangle()).toEqual('isosceles');
  });

  test("scalene triangles have no equal sides", () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.kindOfTriangle()).toEqual("scalene");
  });

  test("scalene triangles have no equal sides at a larger scale too", () => {
    const triangle = new Triangle(10, 11, 12);
    expect(triangle.kindOfTriangle()).toEqual("scalene");
  });

  test("scalene triangles have no equal sides in descending order either", () => {
    const triangle = new Triangle(5, 4, 2);
    expect(triangle.kindOfTriangle()).toEqual("scalene");
  });

  test("very small triangles are legal", () => {
    const triangle = new Triangle(0.4, 0.6, 0.3);
    expect(triangle.kindOfTriangle()).toEqual("scalene");
  });

  test("test triangles with no size are illegal", () => {
    expect(() => { new Triangle(0, 0, 0) }).toThrow();
  });

  test("triangles with negative sides are illegal", () => {
    expect(() => { new Triangle(3, 4, -5) }).toThrow();
  });

  test("triangles violating triangle inequality are illegal", () => {
    expect(() => { new Triangle(1, 1, 3) }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 2", () => {
    expect(() => { new Triangle(7, 3, 2) }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 3", () => {
    expect(() => { new Triangle(10, 1, 3) }).toThrow();
  });

  test("triangles violating triangle inequality are illegal 4", () => {
    expect(() => { new Triangle(1, 1, 2) }).toThrow();
  });
});
