function findMatching(arrayOfDrivers, string) {
  return arrayOfDrivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase(); });
}

 function fuzzyMatch(arrayOfDrivers, string) {
  return arrayOfDrivers.filter(function (driver) { return driver[0] === string[0]; });
}

 function matchName(arrayOfDrivers, string) {
  return arrayOfDrivers.filter(function (driver) { return driver.name === string; });
}
