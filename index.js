// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return driver.toUpperCase() === name.toUpperCase(); });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (driver) { return driver[0].toUpperCase() === name[0].toUpperCase(); });
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) { return driver.name.toUpperCase() === string.toUpperCase(); });
}