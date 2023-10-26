//Using test() method to match regex
let myString = "Hello world";
let myRegex = /Hello/;
console.log(myRegex.test(myString));

// Match Literal String with different  possibilities
// can search for multiple pattern using the alteratiion or OR operator
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString));

// Ignore letter casing while matching
// by using flag
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
console.log(fccRegex.test(myString1));

// Can extract the actual match with .match() method "first match"
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i;
console.log(extractStr.match(codingRegex));

// Find more than First match
// can use global flag "g" to match more than once
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
console.log(twinkleStar.match(starRegex));

// Match anything with Wildcard Period (.)dot
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
console.log(unRegex.test(exampleStr));

// Match single character with multiple possibilities
// "/literal/" and "/./" are extreme cases can use square bracket to match character class
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
console.log(quoteSample.match(vowelRegex));

// Match letters of the alphabets
// using square bracket with hyphen
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
console.log(quoteSample1.match(alphabetRegex));

// Match number and letters of the alphabets.
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let alphaNumRegex = /[h-s2-6]/gi;
console.log(quoteSample2.match(alphaNumRegex));

// Match single character not specified
// "^" is used to negate the characters
let quoteSample3 = "3 blind mice.";
let negateRegex = /[^aeiou0-9]/gi;
console.log(quoteSample3.match(negateRegex));

// Match characters that occurs one or more times
let difficultSpelling = "Mississippi";
let multiOccurRegex = /s+/gi;
console.log(difficultSpelling.match(multiOccurRegex));

// Match characters that occurs 0 or more times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/g;
console.log(chewieQuote.match(chewieRegex));

// Find Characters with Lazy matching
// By default regex are greedy and would find largest sub-string to fit the pattern
// Can change this behaviour by putting "?" before the last macthing character
let text = "<h1>Winter is coming</h1>";
let tagRegex = /<.*?>/;
console.log(text.match(tagRegex));

// Match beginning string patterns
// "^" with [] is used to negate character set
// "^" without [] is used to match beginning string patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal));

// Match Ending string pattern
// $ is used to do so
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
console.log(lastRegex.test(caboose));

// Match all letters and numbers with shorthand character class
// "\w" is a character class equals [A-Za-z0-9_]
let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
console.log(quoteSample4.match(alphabetRegexV2).length);

// Match everything but letters and numbers
// "\W" is a character class opposite to "\w" and equals [^A=Za-z0-9]
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
console.log(quoteSample5.match(nonAlphabetRegex));

// Match All Numbers with shortcut
// The shortcut for digits is \d equals [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
console.log(movieName.match(numRegex));

// Match All Non-Numbers
// \D is the shortcut equals [^0-9]
let noNumRegex = /\D/g;
console.log(movieName.match(noNumRegex));

// Restrict Possible Username
// 1. username can only be alphanumeric
// 2. Numbers should be at the end and cannot start with number
// 3. username can be uppercase or lowercase
// 4. should be 2 char long. 2 char username can have only letters
let userName = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d{2,}$/i;
// userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
// userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
console.log(userCheck.test(userName));

// Match white spaces
// \s is a whitespaces char class equals [ \r\t\f\n\v]
let sample = "Whitespace is important in separating word";
let countWhiteSpace = /\s/g;
console.log(sample.match(countWhiteSpace));

// Match Non-white space characters
// \S is used equals [^ \r\t\f\n\v]
let countNonWhiteSpace = /\S/g;
console.log(sample.match(countNonWhiteSpace));

// Specify upper and lower number matches
// {} are used to specify the upper and lower number of repeating characters
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/gi;
console.log(ohRegex.test(ohStr));

// specify lower number of letters
let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i;
console.log(haRegex.test(haStr));

// Specify the exact number of matches
let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i;
console.log(timRegex.test(timStr));

// Check for All or None
// ? is used to match the string for both with the specified char or without it
let favWordAmerican = "favorite";
let favWordBritish = "Favourite";
let favRegex = /favou?rite/i;
console.log(
  favRegex.test(favWordAmerican) + "  " + favRegex.test(favWordBritish)
);

// Positive and negative lookahead
// "?=" positive lookahead will make sure the element pattern is there
// "?!" negative lookahead will make sure the element pattern is not there
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D+\d{2,})/i;
console.log(pwRegex.test(sampleWord));

// Check for mixed grouping of character
let nameString = "Eleanor Roosevelt";
let nameRegex = /(Eleanor|Franklin)\D* Roosevelt/i;
console.log(nameRegex.test(nameString));

// Reuse Pattern using Capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
console.log(reRegex.test(repeatNum));

// use capture group to search and replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/i;
let replaceText = "$3 $2 $1";
console.log(str.replace(fixRegex, replaceText));

// remove white spaces from start and end
let hello = "   Hello, world!   ";
let wsRegex = /^(\s+)|(\s+)$/g;
console.log(hello.replace(wsRegex, ""));
