// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter((str) => { return str.toLowerCase() === string.toLowerCase() })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((str) => { return str.charAt(0) === string.charAt(0) })
}

function matchName(drivers, string) {
  return drivers.filter((d) => { return d.name === string })
}