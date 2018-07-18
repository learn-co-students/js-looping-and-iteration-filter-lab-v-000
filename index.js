// Code your solution in this file
function findMatching(array, thing) {
  return array.filter(
    function (item) { return item.toLowerCase() === thing.toLowerCase() }
  )
}


function fuzzyMatch(array, thing) {
  return array.filter(
    function (item) {return item.startsWith(thing)}
  )
}

function matchName(array, thing) {
  return array.filter(
    function (item) { return item.name === thing }
  )
}
