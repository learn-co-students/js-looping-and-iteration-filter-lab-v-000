function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    let length = string.length
    return driver.slice(0, length) === string
  })
}

//name PROPERTY matches passed in string
function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    for (const driverName in driver) {
      return driver.driverName === name
    }
  })
}
