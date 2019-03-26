// Code your solution in this file
function findMatching(array, name) {
  const names = array.filter( function (driverName) { return driverName.toLowerCase() === name.toLowerCase();});
  return names
}

function fuzzyMatch(array, begLetters) {
  const names = array.filter( function (driverName) { return driverName.startsWith(begLetters)});
  return names
}

function matchName(array, name) {
  const names = array.filter( function (driver) { return driver.name === name});
  return names
}
