// Code your solution in this file
function findMatching (drivers, string) {
  return drivers.filter(function (name) { return name.toUpperCase() === string.toUpperCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (n) {
    return n.slice(0, string.length) === string;
  })
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  })
}
