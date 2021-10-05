class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a, b) => a - b);

    if (!this.isValidTriangle()) {
      throw new Error('Invalid triangle lengths');
    }
  }
  kindOfTriangle() {
    if (this.isEquilateral()) return 'equilateral';
    if (this.isScalene()) return 'scalene';
    return 'isosceles';
  }

  isEquilateral() {
    return (this.sides[0] === this.sides[1] &&
      this.sides[0] === this.sides[2] &&
      this.sides[1] === this.sides[2]);
  }

  isScalene() {
    return (this.sides[0] !== this.sides[1] &&
        this.sides[0] !== this.sides[2] &&
        this.sides[1] !== this.sides[2]);
  }

  hasZero() {
    if (this.sides.filter(side => side <= 0).length > 0) {
      return true;
    }
    return false;
  }

  validSides() {
    return ((this.sides[0] + this.sides[1]) > this.sides[2]);
  }

  isValidTriangle() {
    return (this.hasZero() === false && this.validSides() === true);
  }
}


module.exports = Triangle;