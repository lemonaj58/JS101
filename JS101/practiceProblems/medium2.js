//lettercase percentage ratio

// eslint-disable-next-line max-lines-per-function
function letterPercentages(string) {
  const TOTAL_LETTERS = string.length;
  let obj = {lowercase: 0,
    uppercase: 0,
    neither: 0};

  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;
  string.split('').forEach(letter => {
    if (letter >= 'a' && letter <= 'z') {
      lowercaseCount += 1;
    } else if (letter >= 'A' && letter <= 'Z') {
      uppercaseCount += 1;
    } else {
      neitherCount += 1;
    }
  });
  givePercentages(lowercaseCount, uppercaseCount, neitherCount,
    TOTAL_LETTERS, obj);
  console.log(obj);
}


function givePercentages(lowercaseCount, uppercaseCount, neitherCount,
  TOTAL_LETTERS, obj) {
  obj.lowercase += (lowercaseCount / TOTAL_LETTERS) * 100;
  obj.uppercase += (uppercaseCount / TOTAL_LETTERS) * 100;
  obj.neither += (neitherCount / TOTAL_LETTERS) * 100;
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

//triangle sides

function triangle (num1, num2, num3) {
  if (isValidTriangle(num1, num2, num3)) {
    if (isIsosceles(num1, num2, num3)) {
      console.log('isosceles');
    } else if (isEquilateral(num1, num2, num3)) {
      console.log('equilateral');
    } else if (isScalene(num1, num2, num3)) {
      console.log('scalene');
    }
  } else {
    console.log('invalid');
  }
}

function isIsosceles(num1, num2, num3) {
  if (((num1 === num2) && num1 !== num3) ||
    ((num1 === num3) && num1 !== num2) ||
    ((num2 === num3) && num2 !== num1)) {
    return true;
  } else {
    return false;
  }
}

function isEquilateral(num1, num2, num3) {
  if ((num1 === num2 && num1 === num3)) {
    return true;
  } else {
    return false;
  }
}

function isScalene(num1, num2, num3) {
  if (num1 !== num2 !== num3) {
    return true;
  } else {
    return false;
  }
}

function isValidTriangle(num1, num2, num3) {
  let array = [num1, num2, num3].sort((a, b) => a - b);
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return false;
  } else if (array[0] + array[1] < array[2]) {
    return false;
  } else {
    return true;
  }
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

function triangles(angle1, angle2, angle3) {
  let totalDegrees = angle1 + angle2 + angle3;

  if (totalDegrees === 180 && (angle1 > 0 && angle2 > 0 && angle3 > 0)) {
    if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
      console.log('right');
    } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
      console.log('acute');
    } else {
      console.log('obtuse');
    }
  } else {
    console.log('invalid');
  }
}

triangles(60, 70, 50);       // "acute"
triangles(30, 90, 60);       // "right"
triangles(120, 50, 10);      // "obtuse"
triangles(0, 90, 90);        // "invalid"
triangles(50, 50, 50);       // "invalid"

//next featured number higher than a given value

function featured(num) {
  while (true) {
    num += 1;
    if (isOdd(num) && noRepeatNumbers(num) && divisedBySeven(num)) {
      console.log(num);
      break;
    } else if (num > 9876543201) {
      console.log('there is no possible number that fulfills those requirements');
      break;
    }
  }
}

function isOdd(number) {
  if ((number % 2) === 1) {
    return true;
  } else {
    return false;
  }
}

function noRepeatNumbers(number) {
  let matchArray = [];
  let numberString = number.toString();
  for (let index = 0; index < numberString.length; index += 1) {
    if (!matchArray.includes(numberString[index])) {
      matchArray.push(numberString[index]);
    } else {
      return false;
    }
  }
  return true;
}

function divisedBySeven(number) {
  if (number % 7 === 0) {
    return true;
  } else {
    return false;
  }
}


featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

//sum of squares

//sum square - square sum

function sumSquareDifference(num) {
  let sumSquared = 0;
  let sumSeperate = 0;

  for (let counter = 1; counter <= num; counter += 1) {
    sumSeperate += Math.pow(counter, 2);
    sumSquared += counter;
  }
  console.log(Math.pow(sumSquared, 2) - sumSeperate);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

//bubble sort

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let idx = 1; idx < array.length; idx++) {
      if (array[idx - 1] <= array[idx]) continue;
      [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
      swapped = true;
    }
    if (!swapped) break;
  }
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

function longestSentence(text) {
  let textArray = text.split(/[.!?]+/);
  let sortArray = textArray.sort((a, b) => b.length - a.length);
  console.log(sortArray[0]);

}


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// eslint-disable-next-line max-len
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// eslint-disable-next-line max-len
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

//unluckiest year

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    thirteenths.push(new Date(year, month, 13));
  }

  return thirteenths.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
