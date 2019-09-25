// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.substring(0, 2) === string);
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string );
}
