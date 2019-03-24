// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toUpperCase() === name.toUpperCase()
  })
}


function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(driver) {
    return driver[0] + driver[1] === letters[0] + letters[1]
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name.toUpperCase() === name.toUpperCase()
  })
}
