// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.slice(0, name.length) === name)
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}
