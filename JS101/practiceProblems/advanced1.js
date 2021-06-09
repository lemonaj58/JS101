//madlibs revisited

let template1 =
  "The %{adjective} brown %{noun} %{adverb} " +
  "%{verb} the %{adjective} yellow " +
  "%{noun}, who %{adverb} %{verb} his " +
  "%{noun} and looks around.";

let template2 = "The %{noun} %{verb} the %{noun}'s %{noun}.";

function madlibs(template) {
  const REPLACEMENT_TEXTS = {
    adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
    noun: ["fox", "dog", "head", "leg", "tail"],
    verb: ["jumps", "lifts", "bites", "licks", "pats"],
    adverb: ["easily", "lazily", "noisily", "excitedly"]
  };

  function replaceText(match) {
    let key = match.replace(/[^a-z]/g, "");
    let index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index];
  }

  return template.replace(/%{[a-z]+}/g, replaceText);
}

// These examples use the following list of replacement texts:

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

//transpose 3x3 matrix
let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(matrix) {
  let index = -1;
  let newMatrix = matrix.map(array => {
    index += 1;
    return array.map(number => {
      console.log(matrix[array.indexOf(number)][index]);
      return matrix[array.indexOf(number)][index];
    });
  });
  return newMatrix;
}

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

//transpose MxN matrix

const matrix2 = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

function transpose2(matrix) {
  let columnIndex = matrix[0].length;
  let rows = matrix.length;
  let newMatrix = [];

  for (let index = 0; index < columnIndex; index += 1) {
    newMatrix.push([]);
    for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
      newMatrix[index].push(matrix[rowIndex][index]);
    }
  }
  return newMatrix;
}


let newMatrix2 = transpose(matrix);

console.log(newMatrix2);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix2);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose2([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose2([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose2([[1]]));                     // [[1]]

transpose2([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

//rotating matrix

function rotate90(matrix) {
  let newMatrix = [];
  let rows = matrix.length;
  let column = matrix[0].length;
  for (let index = 0; index < column; index += 1) {
    newMatrix.push([]);
    for (let index2 = (rows - 1); index2 >= 0; index2 -= 1) {
      newMatrix[index].push(matrix[index2][index]);
    }
  }
  return newMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix3 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix4 = rotate90(matrix3);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix4);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

//marge sorted lists

function merge(array1, array2) {
  let newArray = [];
  let length = 0;

  if (array1.length < array2.length) {
    length += array2.length;
  } else {
    length += array1.length;
  }
  for (let index = 0; index < length; index += 1) {
    if (array1[index] !== undefined && array2[index] !== undefined) {
      newArray.push(array1[index], array2[index]);
    } else if (array1[index] !== undefined) {
      newArray.push(array1[index]);
    } else {
      newArray.push(array2[index]);
    }
  }
  return newArray.sort((a, b) => a - b);

}
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

function mergeSort(array) {
  if (array.length === 1) return array;

  let subArray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);
  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}


mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

//binary search
function binarySearch(array, item) {
  let high = array.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (array[mid] === item) {
      return mid;
    } else if (array[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

let Fraction = require("fraction.js");

function egyptian(targetValue) {
  let denominators = [];
  let unitDenominator = 1;
  while (targetValue > 0) {
    let unitFraction = new Fraction(1, unitDenominator);
    if (unitFraction <= targetValue) {
      targetValue = targetValue.sub(unitFraction);
      denominators.push(unitDenominator);
    }
    unitDenominator += 1;
  }
  return denominators;
}

function unegyptian(denominators) {
  return denominators.reduce(
    (accum, num) => accum + new Fraction(1, num), new Fraction(0)
  );
}

console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2

//diamonds

function diamond(number) {
  for (let index = Math.floor(number / 2); index > 0; index -= 1) {
    console.log(`${' '.repeat(index)}${'*'.repeat(number - (index * 2))}${' '.repeat(index)}`);
  }
  for (let index = 0; index < Math.ceil(number / 2); index += 1) {
    console.log(`${' '.repeat(index)}${'*'.repeat(number - (index * 2))}${' '.repeat(index)}`);
  }
}
diamond(9);


