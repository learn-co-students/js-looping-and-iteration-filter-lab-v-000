// Code your solution in this file

function findMatching (driver, string) {
  return driver.filter(function (dName) {
    return dName.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.slice(0, string.length) === string)
}

function matchName (drivers, name) {
  return drivers.filter(driver => driver.name === name)
}
