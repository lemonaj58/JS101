let Dog = {

};

let maxiPrototype = Object.create(Dog);

maxiPrototype.bark = function () {
  console.log(`${this.sound}`);
};
let maxi = Object.create(maxiPrototype);

maxi.name = 'maxi';
maxi.sound = 'bark';


function BigDog(name, sound) {
  this.name = name;
  this.sound = sound;
}

BigDog.prototype.bark = function () {
  console.log(this.sound);
};

let wiggles = new BigDog('wiggles', 'ROUGHH');

maxi.bark();
wiggles.bark();