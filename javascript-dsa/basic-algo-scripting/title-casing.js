function titleCase(str) {
  let strArr = str.split(" ");
  let newStr = [];
  for (let i = 0; i < strArr.length; i++) {
    newStr.push(strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase());
  }
  return newStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
