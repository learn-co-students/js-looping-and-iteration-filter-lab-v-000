// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(driver => {return driver.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driverName => {return driverName.toLowerCase()[0] === name.toLowerCase()[0]})
}

function matchName(drivers, name) {
  return drivers.filter(driverName => { return driverName.name === name})
}