function findMatching(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.toUpperCase() === string.toUpperCase();
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.substring(0, 2).includes(string);
  })
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  })
}
