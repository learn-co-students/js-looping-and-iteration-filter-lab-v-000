// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) { return driver.slice(0, driver.length-2).includes(string); });
}

function matchName(drivers, string) {
  return drivers.filter(function (driverObject) { return driverObject.name === string; });
}

/*
drivers = [
  { name: value },
  { name: value },
  { name: value }
]
*/
