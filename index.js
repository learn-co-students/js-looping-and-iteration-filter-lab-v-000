function findMatching(collection, match) {
  return collection.filter(function (name) {return match.toLowerCase() === name.toLowerCase() })
}

function fuzzyMatch(collection, match) {
  return collection.filter(function (name) {return match === name.slice(0, match.length)})
}

function matchName(collection, match) {
  return collection.filter(function (person) {return match === person['name']})
}
