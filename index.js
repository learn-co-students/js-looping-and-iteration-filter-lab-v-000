// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, firstLetter) {
  const nameLength = firstLetter.length
  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === firstLetter
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase()
  })
}
