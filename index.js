// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driver) { return driver.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(drivers, beginning) {
  beginning_length = beginning.length;
  return drivers.filter(function(driver) { return driver.slice(0, beginning_length) === beginning; });
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) { return driver.name === name; });
}
