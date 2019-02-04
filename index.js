// Code your solution in this file
function findMatching(array, string) {
  newArray = array.filter(function (driver) { return driver.toUpperCase() == string.toUpperCase() });
  return newArray;
}

function fuzzyMatch(array, string) {
  newArray = array.filter(function (driver) { return driver.toUpperCase()[0] + driver.toUpperCase()[1] == string.toUpperCase() });
  return newArray;
}

function matchName(array, string) {
  newArray = array.filter(function (driver) { return driver.name == string });
  return newArray;
}
