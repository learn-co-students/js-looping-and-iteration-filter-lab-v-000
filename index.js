// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (element) {return element.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(array, letter) {
  return array.filter(function (element) {
    let firsttwo = element[0] + element[1]
    return firsttwo === letter})
}

function matchName(array, name) {
  return array.filter(function (element) {
    return element.name === name 
    })
}
