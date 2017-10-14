// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(driver) {
    return driver.slice(0,2) === letters
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name === name
  })
}
