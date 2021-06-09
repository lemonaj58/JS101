/* eslint-disable linebreak-style */
//sorting.js

/*
sorting in javascript is mostly performed on arrays, this is because
it is easy and accessable to get the data through their index/ their
order of the arrays. since strings cannot be sorted through their
index, even though it is quiet easy to make a string into an array
sort it and then transfter the sorted array into a string again,
it is quiet uncommon.
same with objects, they are usually key and value for what they are
you can sort them through when the keys were made but that isn't a
for sure thing to go off of, which is why we normally only sort
arrays, and not other objects or strings

WHAT IS SORTING?
sorting is setting the order of the items in a collection according
to some criteria

example

[2, 11, 9, 4, 107, 21, 1]
1, 2, 4, 9, 11, 21, 107

these both contain the same numbers but different sequences

Array.prototype.sort method handles some of the complex operations to
sort this out like this.

SORTING IN JAVASCRIPT
caparisons are the heart of how sorting works. sorting algorithms
must compare something between items in a collection. the results
of the comparisons it does creats the new collections, leading
to it being sorted a different way

sorting numeric comparisons may sem easy

for example we all know that 2 comes after 1.
however the default behavior of sort doesnt perform numberical
sorting

Array.prototype.sort sorts the integers with strings. this makes
things kind of weird and a little difficult at times, for when
you want integers to be in numerical order you need to go
apart from this behavior

[null, 'a', true, 1].sort
[1, 'a', null, true]
undefined ate special cases when you sort things with .sort.
they will always end up at the end of the sorted array.


SORTING ARRAYS OF STRINGS ALPHEBETICALLY

calling sort on an array of characters returns an array of
characters oerdered alphabetically

['c', 'a', 'e', 'b', 'd'].sort
[ 'a', 'b', 'c', 'd', 'e' ]


(When working with strings that have multiple characters,
  sort compares them character by character, so the strings
   beginning with a come before those beginning with b; if both
   characters are the same, then the next character in each string
   mpared, and so on. If one string is shorter than another,
   but equal through the length of the shorter string, then the
   shorter string comes before the longer one. For instance, 'cap'
   is shorter than 'cape', so 'cap' comes first in the result.)

sort is an destructive feature, it DOES NOT return a new array.
it returns the SAME array with it being sorted.

if we want to stop this function of sort, you can do
array.slice().sort()

UTF-16

<, >, ===, is easy to determine when dealing with numbers, but when
dealing with strings it is different. the answer is the string order
is determined by a characters code point in the UTF-16

to find the UTF-16 char we can use string.prototype.charCodeAt to
determine th value of the UTF code.

> '+'.charCodeAt()
43
> '3'.charCodeAt()
51
> '+' < '3'
true // since 43 < 51

> 'A' < 'a'         // 65 < 97
true
> 'Z' < 'a'         // 90 < 97
true
> '!' < 'A'         // 33 < 65
true

NO NEED TO MEMORIZE THE UTF-16 CODE!!!!

Uppercase letters come before lowercase letters
 (sometimes called ASCIIbetical order)
Digits and most punctuation come before letters.
There are several punctuation characters between the uppercase
and lowercase letters, and several more that come after all
of the letters.
There is an extended ASCII table that contains accented and
 other characters - this comes after the main ASCII table.
All other UTF-16 characters come after the extended ASCII
 table and have a code point of at least 256.

GENERIC SORTING

going back to the original example. how can we sort the following?
[2, 11, 9, 4, 107, 21, 1]

the defaulft of sort is no help since it sorts all of the numbers to string

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) {
    return -1;
  ]  else if (a> b) {
      return 1;
  } else {
    return 0
});

If the callback returns a number less than 0, place a before b.
If the callback returns a number greater than 0 place b before a.
If the callback returns 0, leave the relative positions of a and b unchanged.
*/