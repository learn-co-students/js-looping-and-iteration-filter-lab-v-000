// Code your solution in this file
function findMatching(array, name){
  newArray = array.filter(function (item) {return item.toUpperCase() === name.toUpperCase()})
  return newArray
}

function fuzzyMatch(array, letters){
  newArray = array.filter(function (item) {return item.slice(0, letters.length).toUpperCase() === letters.toUpperCase()})
  return newArray
}

function matchName(array, string){
  newArray = array.filter(function (item) { return item.name.toUpperCase() === string.toUpperCase()})
  return newArray
}
