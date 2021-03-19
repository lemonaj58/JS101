// 1000 lights

function lightsOn(switches) {
  let arrayOfLights = creatObject(switches);
  let newArray = Object.entries(arrayOfLights);
  let count = 1;
  while (count <= switches) {
  // eslint-disable-next-line no-loop-func
    newArray.forEach(entry => {
      if (entry[0] % count === 0) {
        if (entry[1] === 'off') {
          entry[1] = 'on';
        } else {
          entry[1] = 'off';
        }
      }
    });
    count += 1;
  }
  return returnLightsOn(newArray);
}
function creatObject(switches) {
  let arrayOfLights = {};
  for (let counter = 1; counter <= switches; counter += 1) {
    arrayOfLights[Number(counter)] = 'off';
  }
  return arrayOfLights;
}
function returnLightsOn(array) {
  let onArray = [];
  array.forEach(sub => {
    if (sub[1] === 'on') {
      onArray.push(sub[0]);
    }
  });
  return onArray;
}

console.log(lightsOn(5));
console.log(lightsOn(100));
// now i know my ABCs
let letters = {
  B: 'O',
  X: 'K',
  D: 'Q',
  C: 'P',
  N: 'A',
  G: 'T',
  R: 'E',
  F: 'S',
  J: 'W',
  H: 'U',
  V: 'I',
  L: 'L',
  Z: 'M'
};
function isBlockWord(string) {
  let letterArray = Object.entries(letters);
  let stringArray = string.split('');
  let trueOrFalse = true;
  for (let index = 0; index < stringArray.length; index += 1) {
    for (let counter = 0; counter < letterArray.length; counter += 1) {
      if (letterArray[counter].includes(stringArray[index].toUpperCase())) {
        trueOrFalse = true;
        letterArray[counter] = [];
        break;
      } else {
        trueOrFalse = false;
      }
    }
    if (trueOrFalse === false) {
      break;
    }
  }
  console.log(trueOrFalse);
}
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

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