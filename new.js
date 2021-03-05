/*function substrings(string) {
  let substringArray = string.split('');
  let newStringArray = [];
  for ( let index = 0; index < string.length; index += 1) {
    console.log(substringArray[index]);
    for (let index2 = 0; index2 < string.length; index2 += 1) {
      if (index2 < index) {
        continue;
      } else if (substringArray[index] === substringArray[index2]) {
        newStringArray.push(substringArray[index]);
      } else {
        newStringArray.push(newStringArray[newStringArray.length - 1] +
          substringArray[index2]);
      }
    }
  }
  return console.log(newStringArray);
}

substrings('abcde');
*/


