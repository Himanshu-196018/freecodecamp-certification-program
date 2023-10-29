function findLongestWordLength(str) {
  // Normal method
  let words = str.split(" ");
  let maxLen = 0;
  for (const i in words) {
    if (words[i].length > maxLen) {
      maxLen = words[i].length;
    }
  }
  return maxLen;

  //   Reduce Method
  //   return str.split(" ").reduce((maxLen, word) => Math.max(maxLen, word.length), 0);
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
