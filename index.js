// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) {return driver.toUpperCase() === string.toUpperCase()})
}
function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {return driver.slice(0, string.length).toUpperCase() === string.toUpperCase() })
}
function matchName(drivers, string) {
  return drivers.filter(function (driver) {return driver.name.toUpperCase() === string.toUpperCase()})
}
