// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase();})
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {return driver.startsWith(string);})
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {return driver.name === name;})
}