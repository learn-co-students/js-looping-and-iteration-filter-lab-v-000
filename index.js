// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(word => word.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(drivers, beginning) {
  return drivers.filter(word => word.slice(0, (beginning.length)) === beginning);
}
function matchName(drivers, match) {
  return drivers.filter(arr => arr.name === match)
}
