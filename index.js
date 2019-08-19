// Code your solution in this file
function findMatching(drivers, name) {
  let matchingDrivers = drivers.filter( (driver) => driver.toLowerCase() === name.toLowerCase());
  return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
  let matchingDrivers = drivers.filter( (driver) => driver.charAt(0) === string.charAt(0));
  return matchingDrivers;
}

function matchName(drivers, name) {
  let matchingDrivers = drivers.filter( (driver) => driver.name === name);
  return matchingDrivers;
}
