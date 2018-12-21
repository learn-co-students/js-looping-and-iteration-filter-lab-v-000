// Code your solution in this file

function findMatching(drivers, name) {
return drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase() })
}

function fuzzyMatch(drivers, na) {
  return drivers.filter(function (driver) { return driver.substring(0,2) === na.substring(0,2) })
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) { return driver.name === name })
}
