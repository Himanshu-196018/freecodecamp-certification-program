function bouncer(arr) {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      ans.push(arr[i]);
    }
  }
  return ans;
  //   return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
