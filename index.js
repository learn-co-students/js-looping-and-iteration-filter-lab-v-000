let findMatching = (drivers, name) => {
  return drivers.filter(function (driver) {
    return driver.toUpperCase() === name.toUpperCase();
  })
}

let fuzzyMatch = (drivers, name) => {
  return drivers.filter(function (driver) {
    return driver.slice(0, 2) === name.slice(0, 2)
  })
}

let matchName = (drivers, name) => {
    return drivers.filter(function (driver) {
      return driver.name === name;
    })
}
