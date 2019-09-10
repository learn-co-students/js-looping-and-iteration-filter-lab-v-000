function findMatching (drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch (drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.slice(0, string.length) === string;
  });
}

function matchName (drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
