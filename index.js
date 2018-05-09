// Code your solution in this file
function findMatching(drivers, string) {
  const newDrivers = drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase()})
  return newDrivers;
}

function fuzzyMatch(drivers, string) {
  const newDrivers = drivers.filter(function (driver) {return driver[0].toLowerCase() === string[0].toLowerCase()})
  return newDrivers;
}

function matchName(drivers, string) {
  const newDrivers = drivers.filter(function(driver) {return driver.name === string})
  return newDrivers;
};
