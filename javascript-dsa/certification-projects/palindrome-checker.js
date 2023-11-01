function palindrome(str) {
  str = str.toLowerCase();
  const regex = /[a-z0-9]/g;
  const newStr = str.match(regex);
  return newStr.join("") === newStr.reverse().join("");
}

console.log(palindrome("eye"));
console.log(palindrome("never odd or even"));
console.log(palindrome("A man, a plan, a canal. Panama"));
