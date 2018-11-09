function findMatching(drivers, string) {
  const matches = drivers.filter(function(driver) {return driver.toLowerCase() === string.toLowerCase()})
  return matches
}

function fuzzyMatch(drivers, string) {
  const matches = drivers.filter(function(driver) {return driver[0].toLowerCase() === string[0].toLowerCase()})
  return matches
}

function matchName(drivers, string) {
  const matches = drivers.filter(function(driver) {return driver.name.toLowerCase() === string.toLowerCase()})
  return matches
}