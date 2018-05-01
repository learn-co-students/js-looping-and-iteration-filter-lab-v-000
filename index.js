// Code your solution in this file
function findMatching(collection, match) {
  return collection.filter(element => element.toLowerCase() === match.toLowerCase())
}

function fuzzyMatch(collection, match) {
  return collection.filter(element => element[0] === match[0] && element[1] === match[1])
}

function matchName(collection, match) {
  return collection.filter(object => object['name'] === match)
}
