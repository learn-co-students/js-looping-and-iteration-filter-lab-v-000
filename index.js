function findMatching(drivers, string) {
  return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase(); })
}

function fuzzyMatch(drivers, letter) {
  return drivers.filter(function (driver) { return driver.startsWith(letter) })
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) { return driver.name === string })
}