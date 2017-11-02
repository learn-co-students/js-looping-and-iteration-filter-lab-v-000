function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.toUpperCase() === string.toUpperCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.startsWith(string);
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name === string;
  });
}
