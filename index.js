// Code your solution in this file

function findMatching(drivers, name) {
  let matchedDrivers = drivers.filter(function(driver) { return driver.toLowerCase() === name.toLowerCase() });

  return matchedDrivers;
}

function fuzzyMatch(drivers, string) {
  let filteredDrivers = drivers.filter(function(driver) { return driver.slice(0, string.length) === string;});

  return filteredDrivers;
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {return driver.name.toLowerCase() === string.toLowerCase()})

}
