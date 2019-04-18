// Code your solution in this file
function findMatching(drivers, who) {
  return drivers.filter(function(driver) { return driver.toLowerCase() === who.toLowerCase() });
}