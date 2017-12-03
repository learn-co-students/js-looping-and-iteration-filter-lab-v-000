// Code your solution in this file
function findMatching(drivers, name) {
  let newDrivers = drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
  return newDrivers
}

function fuzzyMatch(drivers, string) {
  let newDrivers = drivers.filter(function(driver) {
    return driver.slice(0,string.length) === string
  })
  return newDrivers
}

function matchName(drivers, driverName) {
  let newDrivers = drivers.filter(function(driver) {
    return driver.name === driverName
  })
  return newDrivers
}
