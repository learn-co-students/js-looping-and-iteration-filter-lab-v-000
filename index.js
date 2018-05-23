// Code your solution in this file
function findMatching (array, string) {
  return array.filter(function (thing) { return thing.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch (array, string) {
    return array.filter(function (thing) { return thing.slice(0, 2) === string})
}

function matchName (array, string) {
  return array.filter(function (thing) { return thing.name === string })
}
