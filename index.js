// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (driver) { return driver.toUpperCase() == string.toUpperCase() });
}

function fuzzyMatch(array, string) {
  return array.filter(function (driver) { return driver.toUpperCase()[0] + driver.toUpperCase()[1] == string.toUpperCase() });
}

function matchName(array, string) {
  return array.filter(function (driver) { return driver.name == string });
}
