// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.charAt(0) + driver.charAt(1) === letters)
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}
