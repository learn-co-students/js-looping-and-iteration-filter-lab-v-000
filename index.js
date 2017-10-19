// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  let stringLength = string.length
  return drivers.filter(function (driver) {
    return driver.slice(0, stringLength) === string
  })
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase()
  })
}
