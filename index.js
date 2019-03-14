// Code your solution in this file
function findMatching(collection, thing){
  return collection.filter(function (input) {return input.toUpperCase() === thing.toUpperCase()})
}

function fuzzyMatch(collection, thing){
  return collection.filter(function (input) {return startMatch(input, thing)})
}

function matchName(collection, thing){
  return collection.filter(function (input) {return input.name === thing})
}

function startMatch(input, thing){
const match = input.slice(0,(thing.length))
if (match === thing){return true}
}
