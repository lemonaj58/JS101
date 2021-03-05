//stringMethods.js
//strings are immutable, all of these commans do not mutate the strings.
//string.prototype.concat
'hello '.concat('world') // => 'hello world'
let str1 = 'hello'
let str2 = 'world!'
str1.concat('', str2); // => 'hello world!'

//String.prototype.includes
let str3 = 'eeny, meeny, miny, moe'
str3.includes('miny') // => true
str3.includes('joe') // => false
'abc'.includes('a'); // => true

//also you can choose where the includes is, aka index number example
'abcdefg'.includes('b', 2); // => false

//string.prototype.split
'abcdef'.split(); // => ['abcdef']
abcdef.split('') // => [ 'a', 'b', 'c', 'd', 'e', 'f' ]
'Eeny, meeny, miny, moe'.split(', ') // =>  [ 'Eeny', 'meeny', 'miny', 'moe' ]
//any other arguemnt you provide to split will be used as the seperator

//String.prototype.trim
//trim opperator removes the whitespace from both ends, 
//best used for user inputs, which can often have unnecessary whitespace

'   abcde     '.trim(); // => 'abcde'
// also removes characters like /n or \t example.
'\nabcdef\t'.trim() // => 'abcdef'
//other vriances is trimStart, and trimEnd

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
capitalize('pete') // => 'Pete'

//String.prototype.charAt
// identically like using brackets on a string,
//gives index as an arguement

let sentence = "It's a walk in the park."
sentence.charAt(5) // => 'a'
// they key difference between using brackets and charAt is that when
// the character doesnt exist, charAt returns '', while brackets undefinded

//String.prototype.charCodeAt
// this is simalr to charAt but it returns the Unicode code point
// or otherwise known as character code of character at that index
// it represents a given character at the machine leve.

'abcde'.charCodeAt(1); // => 98
// String.fromCharCode
// this is exact opposite of charCodeAt, it gives your the representation
// of the character code, or Unicode code point
String.fromCharCode(97) // => 'a'
