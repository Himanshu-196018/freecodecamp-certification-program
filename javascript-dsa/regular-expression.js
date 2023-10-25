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
