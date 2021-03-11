let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, array) {
  return array.filter(inventory => inventory.id === id);
}
function isItemAvailable(id, array) {
  let itemTransaction = transactionsFor(id, array);
  let total = itemTransaction.reduce((counter, transaction) => {
    if (transaction.movement === "in") {
      return counter + transaction.quantity;
    } else {
      return counter - transaction.quantity;
    }
  },
  0
  );

  return total > 0;
}


isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true


function rotateRightmostDigits(number, movedNumber) {
  let stringNumber = number.toString();
  let length = stringNumber.length;
  let firstPart = stringNumber.slice(0, (length - movedNumber));
  let secondPart = stringNumber.slice(length - (movedNumber - 1));
  let lastPart = stringNumber.slice(-movedNumber, (-movedNumber + 1));
  let returnedWord = Number(firstPart + secondPart + lastPart);
  console.log(returnedWord);

}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917



function maxRotation(number)) {
  let stringNumber = number.toString();
  let length = stringNumber.length
  for (let index = 1; index <= stringNumber.length; index += 1) {
    console.log(stringNumber.slice(index, length))
  }
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
