// Code your solution in this file
function findMatching(collection, name) {

  let result = collection.filter(function(individual) {return name.toUpperCase()===individual.toUpperCase()})
  return result
}

function fuzzyMatch(collection, search) {
  let result = collection.filter(function(individual) {return search === individual.slice(0,search.length)})
  return result
}

function matchName(collection, name) {
  let result = collection.filter(function(individual) {return name === individual.name})
  return result
}
