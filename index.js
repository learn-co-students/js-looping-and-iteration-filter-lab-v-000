function findMatching (drivers, name) {
  return drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch (drivers, query) {
  return drivers.filter(function(driver) {return driver.slice(0, query.length) === query})
}

function matchName (drivers, query) {
  return drivers.filter(function(driver) {return driver.name === query})
}
