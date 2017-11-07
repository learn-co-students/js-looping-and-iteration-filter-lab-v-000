function findMatching(drivers, target) {
  return drivers.filter(function (driver) {
    if (driver.toLowerCase() === target.toLowerCase()) {
      return driver;
    }
  })
}

function fuzzyMatch(drivers, target) {
  return drivers.filter(function (driver) {
    if (driver.slice(0, target.length) === target) {
      return driver;
    }
  })
}

function matchName(drivers, target) {
  return drivers.filter(function (driver) {
    if (driver.name === target) {
      return driver;
    }
  })
}
