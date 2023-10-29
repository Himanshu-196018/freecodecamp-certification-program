function chunkArrayInGroups(arr, size) {
  const ans = [];
  // Method - 1 normal
  //   let help = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (help.length == size) {
  //       ans.push(help);
  //       help = [];
  //     }
  //     help.push(arr[i]);
  //   }
  //   if (help.length) {
  //     ans.push(help);
  //   }

  //   Method - 2 with splice/slice
  for (let i = 0; i < arr.length; i + size) {
    ans.push(arr.splice(i, i + size));
  }

  return ans;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
