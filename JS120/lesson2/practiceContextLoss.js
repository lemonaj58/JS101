/* eslint-disable max-len */
//the code below should output "christopher turk is a surgeon." without running it what will it output.

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a'
                                + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);
//this will return undefined undefined is a undefined. this is because the context is pointing to
//the global variable since it is invoked in the outer scope of everything.

//modify the program from the pervious problem so that logreturn value accepts an additional cont
//arguement. if you then run the program with turk as the context arg and should produce what we want.

let turk2 = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                + this.occupation + '.';
  }
};

function logReturnVal2(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal2(turk2.getDescription, turk2);

let turk3 = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                + this.occupation + '.';
  },
};

// eslint-disable-next-line no-unused-vars
function logReturnVal3(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}
let getDescription = turk3.getDescription.bind(turk3);
getDescription();

const TESgames = {
  titles: ['Arena', 'daggerfall', 'morrowind', 'oblivion', 'skyrim'],
  seriesTitles: 'the elder scrolls',
  listGames: function() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitles + ': ' + title);
    });
  },
  listGames2: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitles + ': ' + title);
    }, this);
  },
  listGames3: function () {
    this.titles.forEach(title => {
      console.log(this.seriesTitles + ': ' + title);
    });
  },
};

TESgames.listGames();
TESgames.listGames2();
TESgames.listGames3();
//no it will not log that, because this is in the global scope, it will be undefined : title for all
//just because of where it is logged.

let foo = {
  a: 0,
  incrementA: function() {
    let self = this;
    function increment() {
      self.a += 1;
    }

    increment();
  }
};
foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);
//the value of foo.a after this is 0, it is because the function in invoked in the global scope, so it changes
//the value of global.a and that is undefined, so then we change it to NaN in the global object not foo.