// Code your solution in this file
function findMatching(drivers, who) {
  return drivers.filter(function(driver) { return driver.toLowerCase() === who.toLowerCase() });
}

function fuzzyMatch(drivers, who) {
  return drivers.filter(function(driver) { return driver.startsWith(who) });
}

function matchName(drivers, who) {
  return drivers.filter(function(driver) {return driver.name === who });
}
