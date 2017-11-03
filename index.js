// Code your solution in this file
function findMatching (collection, string) {
  return collection.filter(function (element) { return element.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch (collection, string) {
  let user = string.length
  return collection.filter(function (element) { return element.slice(0,user) === string; });
}

function matchName(collection, string) {
  return collection.filter(function (element) { return element.name === string; });
}
