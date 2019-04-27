// Code your solution in this file

function findMatching(array, name){
  return array.filter(function (thing) {return thing.toUpperCase() === name.toUpperCase()})
}

function fuzzyMatch(array, string){
  return array.filter(function (thing) {return thing[0] === string[0]})
}

function matchName(array, string){
  return array.filter(function (thing) {return thing.name === string})
}
