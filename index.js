// Code your solution in this file
function findMatching(drivers, selection) {
  return drivers.filter(function(driver) { return driver.toLowerCase() === selection.toLowerCase() });
}