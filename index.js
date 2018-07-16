// Code your solution in this file

function findMatching(array, element) {
  return array.filter(function (item) {return item.toLowerCase() === element.toLowerCase()});
}

function fuzzyMatch(array, element) {
  return array.filter(function (item) {return item.slice(0,element.length) === element})
}

function matchName(array, element) {
  return array.filter(function (item) {return item.name.toLowerCase() === element.toLowerCase()});
}
