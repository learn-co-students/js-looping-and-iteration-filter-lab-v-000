// Code your solution in this file

function findMatching(drivers, person) {
  return drivers.filter(function(driver) {return driver.toLowerCase() === person.toLowerCase()});
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(function(driver) {return driver.slice(0, query.length) === query})
}

function matchName(drivers, query) {
  return drivers.filter(function(driver) {return driver.name === query})
}