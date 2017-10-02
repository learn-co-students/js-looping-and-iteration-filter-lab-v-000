// Code your solution in this file


function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
    // string.match(/(bobby)/i)
    // driver.match(new RegExp(string, ['gi']));
    // if (driver === string || driver === string.toLowerCase()) {
    if (driver.match(new RegExp(string, ['gi']))) {
      return driver
    }
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {
    // string.match(/(bobby)/i)
    // driver.match(new RegExp(string, ['gi']));
    // if (driver === string || driver === string.toLowerCase()) {
    // if (driver.slice(0, string.length) === string || driver.slice(0, string.length) === string.toLowerCase()) {
    if (driver.slice(0, string.length).match(new RegExp(string, ['i']))) {
      return driver
    }
  })
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    if (driver.name === string) {
      return driver
    }
  })
}