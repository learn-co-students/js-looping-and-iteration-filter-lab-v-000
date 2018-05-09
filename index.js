// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, string) {
  const substringLength = string.length;
  return drivers.filter(function (driver) {return driver.substring(0, substringLength).toLowerCase() === string.toLowerCase()})
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {return driver.name === string})
};
