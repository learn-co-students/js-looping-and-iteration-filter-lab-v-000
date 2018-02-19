function findMatching(collection, string) {
  return collection.filter(function (element) { return element.toLowerCase() === string.toLowerCase(); })
}

function fuzzyMatch(collection, letter) {
  return collection.filter(function (element) { return element.startsWith(letter)})
}

function matchName(collection, name) {
  return collection.filter(function (element) { return element.name === name })
}
