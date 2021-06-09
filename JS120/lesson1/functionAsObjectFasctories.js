/*
in this assignment we will be able to duplicate the objects.
as in the racecar example, we need at least two different cars to
do a race, but we can have more than that as well for a race,
we can have hundreds if we wanted to. one way to do that is just
duplicating the object, as in copy and pasting the object.
*/

/*
this way is the better way to create objects if you need multiple,
creating multiple objects that are almost the same, you can automate
the creation of the objects with a function.

in OOP we often need to create multiple objects of the same type
this provides a straight forward way to do that.
*/
// eslint-disable-next-line max-lines-per-function
function createCar(model, fuelAmount, onOrOff) {
  let object = {
    make: model,
    fuelLevel: fuelAmount,
    engineOn: onOrOff,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      this.fuelLevel -= .1;
    },

    stopEngine() {
      this.engineOn = true;
    },

    refuel(percent) {
      if ((this.fuelLevelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    }
  };

  return object;
}

let raceCar3 = createCar('jaguar', 0.4, 'off');
console.log(raceCar3);
//copy and past (dont want to use this method)
/*
let raceCar1 = {
  make: 'bmw',
  fuelLevel: .5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= .1;
  },
  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  }
};

let raceCar2 = {
  make: 'Ferrari',
  fuelLevel: .7,
  engineOn: true,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= .1;
  },
  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  }
};
*/