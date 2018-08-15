function findMatching (drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch (drivers, letters) {
  return drivers.filter(function(driver) {
    return driver.slice(0, letters.length).toLowerCase() === letters.toLowerCase();
  })
}

function matchName (drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  })
}
