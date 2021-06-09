//lesson4PracticeProblems.js

//what is the return value of the filter method called blow and why?
console.log([1, 2, 3].filter(num => 'hi'));
// since 'hi' is always truthy then it will always returnt the same array
//no matter what.

//what is the return value of map in the following code? and why?

[1, 2, 3].map(numb => {
  num * num;
})
// the return value will be [undefined, undefined, undefined]
// map looks at the return value of the callback to decide
//what elements should be returned. it doesnt mutate or do anything
// to the array so num * num does nothing to the map funtion

//what is the return value of the following statement? and why?

  ['ant', 'bear', 'caterpillar'].pop().length();

// the return value is 11, this is because this processes pop first,
//which it is removing 'caterpillar' then we process the length of
//what we just popped which is length 11.

// how does Array.prototype.fill work? is it destructive? how can we find out?
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
// this array will retuen [1, 1, 1, 1, 1]; because it is filling from
//index 1 - 5 it will not creat a new element but just will do what
// the array already has, also this is a destructive property and will
// write over the existing array. we can check this in node, by
// creating the array, performing fill, then calling the array again.


//what is the return value of map in the following code? and why

['ant', 'bear'].mao(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// [undefined, 'bear']
// this is because bear fits in the element length. this is 4 characters
// while ant is only 3 characters

let flintstones = ["fred", "barnet", "wilma", "bettey", "pebbles", "bambam" ];
let flintstoneOrder = {};

flintstones.forEach(name, index => {
  flintstonesOrder[name] = index;

});
let index = 0;
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

Object.values(ages).forEach(number => {
  index = number + index;
  return index;
});

let ages2 = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArr = Object.values(ages2);
let currentAge = agesArr[0];
agesArr.forEach(ages => {
  if (currentAge > ages) {
    currentAge = ages;
  }
  return currentAge;
});

//another way we could do this is setting the agesArr the same way i did
// then use Math.min(...agesArr); this will give us the same result
//and look a lot cleaner and smoother than running this loop

let statement = "The FlintStones Rock";

let statementArr = statement.split('').filter(char => char !== ' ');
let statementObject = {};

statementArr.forEach(char => {
  if (Object.keys(statementObject).includes(statementObject)) {
    statementObject[char] += 1;
  } else {
    statementObject[char] = 1;
  }
});

statementObject;