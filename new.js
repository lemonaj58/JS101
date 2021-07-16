function Circle3(radius) {
  this.radius = radius;
}

Circle3.prototype.area = function () {
  return Math.pow(this.radius, 2) * Math.PI;
}

let newCirc = new Circle3(3);
console.log(newCirc.area());