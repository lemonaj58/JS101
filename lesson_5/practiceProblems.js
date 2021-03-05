//number 1
let arr = ['10', '11', '9', '7', '8'];

console.log(arr.sort((a, b) => Number(b) - Number(a)));
//number 2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(books.sort((a, b) => Number(a.published - Number(b.published))));
// number3
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3] );

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]);
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2.third)[0]);


//number 4

let sarr1 = [1, [2, 3], 4];
sarr1[1][1] = 4;
console.log(sarr1);
let sarr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
sarr2[2] = 4;
console.log(sarr2);
let sobj1 = { first: [1, 2, [3]] };
sobj1.first[2][0] = 4;
console.log(sobj1);
let sobj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
sobj2['a']['a'][2] = 4;
console.log(sobj2);

//number 5

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let memberDetails = Object.values(munsters);
let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});
console.log(totalMaleAge);

//number 6

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

//number 7

//[4[3, 8];

//number 8;

let object = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let entries = Object.values(object);
let vowels = ['a', 'e', 'i', 'o', 'u'];

entries.forEach(arr => {
  arr.forEach(string => {
    let newString = string.split('');

    newString.forEach(letter => {
      if (vowels.indexOf(letter) !== -1) {
        console.log(letter);
      }
    });
  });
});
//number 9
let array = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

console.log(array.map(arr => {
  if (typeof arr[0] === 'string') {
    return arr.slice().sort();
  } else {
    return arr.sort((a, b) => b - a);
  }
}));
//number 10
let array2 = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

array2.map(arr => {
  return arr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});
//number 11
let arrayy = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arrayy.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
});

console.log(arrayy);

//number 12
let ray = [[2], [3, 5, 7], [9], [11, 15, 18]];

let ray2 = ray.map(arr => {
  return arr.filter(number => number % 3 === 0);
});

console.log(ray2);

//number 13

let moreToLess = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

console.log(moreToLess.sort((a, b ) => {
  let newA = a.filter(num => num % 2 === 1).reduce((sum, num) => sum + num);
  let newB = b.filter(num => num % 2 === 1).reduce((sum, num) => sum + num);

  return newA - newB;
}));

//number 14

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let cap = word => word[0].toUpperCase() + word.slice(1);
console.log(Object.values(obj).map(keyValues => {
  if (keyValues['type'] === 'fruit') {
    return keyValues['colors'].map(char => cap(char));
  } else {
    return keyValues['size'].toUpperCase();
  }
}));

//number 15


let rra = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newrra = rra.filter(obj => {
  return Object.values(obj).every(arr => {

    return arr.every(num => num % 2 === 0);

  });
});

console.log(newrra);

//number 16

let narray = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];
let obj23 = {};
narray.forEach(subarray => {
  let key = subarray[0];
  let value = subarray[1];

  obj[key] = value;
});

console.log(obj23);