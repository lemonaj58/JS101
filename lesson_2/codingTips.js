/*having to struggle with a problem is key to leartning coding. 
the reason this is, is because usually you always remember the
headache of the problem which you always tend to remembemer to 
not make that mistake for coding porposes right after it happens
and in turn the long run of you coding, which will make me a better coder


always choose discriptive names for variables. this is so you do
not have to always go back and realize what the variable was
or have to always go back and get the meaning of it
example never use the variable let p = getUserInput();
that will just make this experience harder on yourself and
harder for future people that read your code if it needs debugged
in the future

idiomatic names for variables follow camelCase, where the first
letter is always lowercase, then the following word in the 
variable is uppercase, example, getFileName is camelCase.
variables sometimes use yooercase letters with multiple words
seperated by underscores such as MY_CONSTANT, which signifies this
variable should be treated by a constant and should never be 
reasigned in the program
idiomatic names are:
cat employee
number1
fizzBuzz
validateUserInput
tacoshack42
MINUTES_PER_HOUR
parseURL
non-idiomatic names are syntactically valid names that do not follow
the same conventions as idiomatic names, 
_cat                   // starts with an underscore
Employee               // starts with an uppercase letter
number_1               // contains an underscore
fizzBUZZ               // second word is all uppercase
validate_User_Input    // contains underscores
taco$hack42            // contains a `$`
MINUTESPERHOUR         // 'constant' - missing underscores between words
paRseURL               // contains an uppercase letter inside of a non-acronym word

avoid usuding magic numbers, which is a number that comes into
your program that doesnt have any information on the number or
anything that it represents. to avoid this you can use the number
as a variable. const NUMBER_CARDS_IN_HAND = 5

sometimes a constant is in unicode code points (sometimes erroneously
referred to as the ASCII character-code values) for the characters
a and z, you can define those constants like
const FIRST_CHARACTER_CODE = 97;
const LAST_CHARACTER_CODE = 122;

this code works but it is still not clear what 07 and 122 are meaning
in the context of your program

you could use this instread 
const FIRST_CHARACTER CODE = 'a'.charCodeAt();
const LAST_CHARACTER_CODE = 'z'.charCodeAt();

for functions, if you are alway confused, or having to go back
and see what a funtion does, you should simplify it, it probably
means it is doing more things than one and reurning a value and 
mutating it at the same time or anything of that sort,
i should refrain from using functions that are more than 10 lines
long for that in specific.
the more specific and simplistic the function is, the more simple
your code is going to be to debud and understand for future people 
your functions should be like LEGO blocks, which should be stand 
alone peices of a funtionality of the program.
*/