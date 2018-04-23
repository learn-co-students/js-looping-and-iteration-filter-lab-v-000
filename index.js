// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(driver => (driver.toLowerCase()) === (string.toLowerCase()));
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.slice(0,2) === string);
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}