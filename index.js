function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toUpperCase() === name.toUpperCase()
  } );
}

function fuzzyMatch(drivers, partial) {
  let letters = partial.length
  return drivers.filter(function (driverName) {
    return driverName.slice(0, letters) === partial
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {return driver.name === name})
}
