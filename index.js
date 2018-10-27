 function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, subString) {
  let stringList = subString.length
  return drivers.filter(function(driverName) {
    return driverName.slice(0, stringList) === subString
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.name === name
  })
}
