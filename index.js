// Code your solution in this file
function findMatching(drivers,string) {
  return drivers.filter((element) => element.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers,string) {
  return drivers.filter((element)=> element.match(new RegExp(`^${string}`,'i')))
}

function matchName(drivers,string) {
  return drivers.filter((element) => element.name === string)
}