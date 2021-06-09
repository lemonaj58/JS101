console.log(true);  //true
console.log(false)  // fasle

function makeLonger(string,longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

console.log(makeLonger("abc", true));  // 'abcabc'
console.log(makeLonger("xyz", false))

function isDigit(char) {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false
  }
}
console.log(isDigit("5"));  //true
console.log(isDigit("a"));  //false

if (value === true) {
  console.log("it's true!");
} else if (value === false) {
  console.log("It's false!");
} else {
  console.log("It's not true or false!");
}


let num = 5;

if (num < 10) {
  console.log("smaill number");
} else {
  console.log("large number")
}

