// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase() })
}

function fuzzyMatch(drivers, input) {
  return drivers.filter(function (driver) {return driver.slice(0, input.length) === input})
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {return driver["name"] === name } )
}
