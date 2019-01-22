function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, string) {
  const stringLength = string.length;
  return drivers.filter(function (driver) { return driver.substring(0, stringLength) === string});
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) { return driver.name === string});
}
