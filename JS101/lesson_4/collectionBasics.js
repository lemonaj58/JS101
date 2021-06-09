let str = 'The Grass is green'
console.log(str.slice(4,9));
console.log(str.substring(4, 9));

'abcdef'.substring(3, 1); // => 'bc'
'abcdef'.slice(3, 1); // => ''

'abcdef'.substring(-2); // => 'abcdef'
'abcdef'.slice(-2); // => 'ef'
// arrays work the same as strings as in numerical values for their indexs
// starting with 0, 1, 2, 3, 4, etc
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr[2]; // => 'c'
arr.slice(2, 5); // => ['c', 'd', 'e']
arr.slice(2, 5)[0]; // => ['c']

let arr2 = [1, 2, 3, 4]
let arr2Copy = arr.slice();
arr2Copy.push(5);
console.log(arr2);
console.log(arr2Copy);

/* objects are also a common collection of data, but instead of
using an integerbased index, it uses key-value pair, object keys are 
called properties
such as 
*/
let object = {shirts: 3,
              pants:  5,
              socks:  6,
              drawers: 6};
object.shirts;
object['shirts']

let capitals = {uk: 'london', France: 'paris', germany: 'berlin'}
object.keys(capitals); // =>['uk', 'france', 'germany']
Object.values(capitals); // +. ['london', 'paris', 'berlin']
Object.values(captials)[0]; // => 'london'
capitals.hasOwnProperty('france'); // => true
capitals.hasOwnProperty('canada'); // => false
Object.keys(capitals).includes('france'); // => true
let arr = ['foo', 'bar','qux'];
let obj = {1: 1, b: 2}
typeof arr; // => 'object'
typeof obj; // => 'object'
Array.isArray(arr); // => true
Array.isArray(obj); // => false
String.prototype.split, Array.prototype.join
'this is a string'.split(); // => ['this is a string']
'abcdefg'.split(''); // => ['a', 'b', 'c', 'd', 'e', 'f', 'g']
let array = ['a', 'b', 'c', 'd', 'e', 'f'];
array.join('');
let numbers = [1, 2, 3, 4];
numbers[0] = numbers[0] + 1;  // => 2
numbers;  // => [ 2, 2, 3, 4 ]
let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
obj['apple'] = 'Fruit';
obj.carrot = 'Vegetable';
obj['pear'] = 'friut';
obj.broccoli = 'vegetable';
str = 'B' +str.slice(1);
//this will let you set a value that you want to a string, 