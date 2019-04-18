// Code your solution in this file
function findMatching(drivers, selection) {
  return drivers.filter(function(driver) { return driver.toLowerCase() === selection.toLowerCase() });
}

function fuzzyMatch(drivers, selection) {
  return drivers.filter(function(driver) { return driver.startsWith(selection) });
}

function matchName(drivers, who) {
  return drivers.filter(function(driver) {return driver.name === who });
}