//intoductionToPEADAC.js
/*
PEDAC
p-[understand the] problem
E - Examples/test cases
D - Data Structure
A - Algorithm
c - Code

P - [UNDERSTAND THE] PROBKEM

1. read the problem description
2. check the test cases, if any
3. if any part of the problem is unlcer, ask the interviwer or problem
requester to clarify the matter.

PROBLEM:

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// changeMe("We will meet at noon") == "We will meet at NOON"
// changeMe("No palindromes here") = "No palindromes here"
// changeMe("") == ""
// changeMe("I LOVE my mom and dad equally") == "I LOVE my MOM and DAD equally"

we may need clarification on some of the items.

1. if you dont know what a palindrome is, you might want to ask the
interviwer to tell you what it is, and they should tell you,
it is a word that reads the same backwards and forwards

2. whould the words in the string remain the same if they already use
upercase? here you can check the test cases, in the fourth test case
the word 'love' already uses uppercase, and it reamains uppercase in
the solution

3. how should i deal with empty strings provided as input? the test cases
frquently answer this question, in this case, test case 3 provides the
answer. this is an implicit requirment that we can infer.

4. can i assume all inputs are string? test cases dont show any non-string
unputers, so you chould ask wether the inputs can contain non-string
values, and what you should do with them. in this problem, we wont worry
about non-string value

5. should i consider letter case when deciding weather a word is a
palindrome? again, test cases done show any appropriate examples. the
interviewer might tell you that the palindrome words should be case
sensitive: mom is a palindrome but Mom is not one.

6. do i need to return the same object or an entirely new one? this
question isnt relevent to our current problem since JS strings are
immutable and any operation on them will result in a new string. in
general, though, this question is on of the most impoertant and most
overlooked that you can ask. typically, while solving problems,
students make certain assumtions. one assumption they might make is
return the same object: they often start solving the problem without
checking weather the assumption is correct. for this reason, the
student may end up losing 10 -15 minutes struggling with the wrong
problem

7.always verify your assumptions by looking at the test cases or by
asking the interviewer. as discussed in the above point, students often
make addumptions about the problem or the expected output that
may not be what the interviewer has in mind, that can lead to a waste
of time pursuing an incorrect or incomplete solution. make sure to
confirm what your assumptions are correct before you proceed to start
developing your algorithm.

to conclude this part of the PEDAC process, you need to write down what
inputs and outputs for the problems are, you should also describle the
rules that you must follow. the rules should ecnapsulate all the explicit
and implicit requirments in the problem. so, you should identify what the
explicit requirments are, write them down, and repeat the process for
implicit requirments :

 input: string
// output: string (not the same object)
// rules:
//      Explicit requirements:
//        - every palindrome in the string must be converted to
//          uppercase. (Reminder: a palindrome is a word that reads
//          the same forwards and backward).
//        - Palindromes are case sensitive ("Dad" is not a palindrome, but
//          "dad" is.)

//      Implicit requirements:
//        - if the string is an empty string,
 the result should be an empty array

DATA STRUCTURE / ALGORITHM

data structures influence your algorithm, and for that reason, these two
steps are often paired. deciding what data structure to use is generally
easy for students: use cases for arrays and objects, for instance, are
generally easy to identify. however, designing the right algorithm is
far more challenging. the biggest problem that students have when writing
algorithms is providing sufficient detail.

lets consider another problem.

// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// palindromeSubstrings("supercalifragilisticexpialidocious") == ["ili"]
// palindromeSubstrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
// palindromeSubstrings("palindrome") == []
// palindromeSubstrings("") == []

test case
output: new string(since strings cannot be mutated

rules:
    explicit requirments: return all of the palidromes in a new string
    you will say all the palidromes if there are contunious ones
    if it was not a palidrome enter a empty array
    if it is a empty string return an empty array

for each starting index from 0 through the next to last index position
  for each substring length from 2 until there are no substrings of that length
    extract the substring of the indicated length
     starting at the indicate index position
  end of inner loop
end of outer loop

// - create an empty array called `result` that will
 contain all required substrings
// - create a `startingIndex` variable (value `0`)
 for the starting index of a substring
// - start a loop that iterates over `startingIndex`
 from `0` to the length of the string minus 2
//   - create a `numChars` variable (value `2`) for the length of a substring
//   - start an inner loop that iterates over `numChars`
 from `2` to `string.length - startingIndex`
//     - extract a substring of length `numChars` from
 `string` starting at `startingIndex`
//     - append the extracted substring to the `result` array
//     - increment the `numChars` variable by `1`
//   - end the inner loop
//   - increment the `startingIndex` variable by `1`
// - end the outer loop
// - return the `result` array

This is what the complete informal pseudocode for this
 problem is // input: a string
// output: an array of substrings
// rules: palindrome words should be case sensitive, meaning "abBA"
//        is not a palindrome

// Algorithm:
//  substrings function
//  =================
//    - create an empty array called `result` that will
 contain all required substrings
//    - create a `startingIndex` variable (value `0`)
 for the starting index of a substring
//    - start a loop that iterates over `startingIndex`
 from `0` to the length of the string minus 2
//      - create a `numChars` variable (value `2`) for the length of a substring
//      - start an inner loop that iterates over `numChars`
 from `2` to `string.length - startingIndex`
//        - extract a substring of length `numChars` from
 `string` starting at `startingIndex`
//        - append the extracted substring to the `result` array
//        - increment the `numChars` variable by `1`
//      - end the inner loop
//      - increment the `startingIndex` variable by `1`
//    - end the outer loop
//    - return the `result` array

//  isPalindrome function
//  =====================
//    - Inside the `isPalindrome` function, check whether the string
//      value is equal to its reversed value.

//  palindromeSubstrings function
//  ============================
//    - declare a `result` variable and initialize it to an empty array
//    - create an array named `substrArray` that will contain all of the
//      substrings of the input string that are at least 2 characters long.
//    - loop through the words in the `substrArray` array.
//      - if the word is a palindrome, append it to the `result` array
//    - return the `result` array

TESTING FREQUENTLY
testing isnt properly part of the PEDAC approach but it is an important
step that you dont want to omit. test your code early and often while
writing it. for instance, consider the substrings function that we
did above. when we are writing this code we might have started with
function substrings(str) {
  let result = []
  let startingIndex = 0;
  let numChars = 2;
  let endIndex = startingIndex + numChars;


}
*/