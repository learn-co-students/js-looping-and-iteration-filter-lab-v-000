function findMatching(drivers, name) {
  return drivers.filter(function(driver) { return driver.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, name) {
  let length = name.length
  return drivers.filter(function(driver) {
    if (driver.substring(0, name.length) === name){
      return driver
    };
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) { return driver.name === name});
}
