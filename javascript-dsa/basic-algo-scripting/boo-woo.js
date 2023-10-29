function booWho(bool) {
  return bool === true || bool === false;
  // return typeof bool === "boolean";
}

console.log(booWho(null));
