function findMatching(drivers, name) {
  return drivers.filter(function(driver) {return driver.toUpperCase() === name.toUpperCase();});
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(driver) {return driver.startsWith(letters);});
}

function matchName(drivers, nameToFind) {
  return drivers.filter(function(driver) {return driver.name === nameToFind;});
}
