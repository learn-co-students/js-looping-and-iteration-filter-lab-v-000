// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, partialName) {
  let lengthOfName = partialName.length;
  return drivers.filter(function (driver) { return driver.slice(0, lengthOfName).includes(partialName); });
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
