function maxRotation(number) {
  let stringNumber = number.toString();
  let length = stringNumber.length;
  let startingNumber = stringNumber.slice(1, length) + stringNumber[0];
  let newNumber = '';

  for (let index = 0; index < length; index += 1) {
    newNumber += startingNumber.slice(0, 1);
    startingNumber = startingNumber.slice(2, length) + startingNumber[1];


  }
console.log(Number(newNumber));
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
