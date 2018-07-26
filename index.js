// Code your solution in this file
function findMatching(driver, string) {
  return driver.filter(word => word.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(driver, string) {
  return driver.filter(word => word.slice(0, string.length) === string);
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver["name"] === string);
}
