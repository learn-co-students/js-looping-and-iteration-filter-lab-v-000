// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (list_name) {return name.toLowerCase() === list_name.toLowerCase()})
}

function fuzzyMatch(array, letters) {
  return array.filter(
    function (name) {return name.indexOf(letters) === 0}
  )
}

function matchName(array, name) {
  return array.filter(function (obj){return obj.name === name})
}
