function findMatching (drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch (drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.substring(0, 2) === name.substring(0, 2);
  })
}

function matchName (drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name === name;
  })
}
