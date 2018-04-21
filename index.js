// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toUpperCase() == name.toUpperCase())
}

function fuzzyMatch(drivers, letters) {
  let l = letters.length
  return drivers.filter(function (driver) {
    return driver.slice(0, l) === letters
  })
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}
