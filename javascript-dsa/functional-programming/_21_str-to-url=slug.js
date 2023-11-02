// Apply Functional Programming to convert String to URL slugs
function urlSlug(title) {
  return title
    .toLowerCase()
    .split(" ")
    .filter((st) => st != "")
    .join("-");
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is Coming"));
