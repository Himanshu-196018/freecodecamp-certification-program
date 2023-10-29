function reverseString(str) {
  // method-1
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;

  // method-2
  //   return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("eyes"));
