function findMatching(drivers, str) {
  return drivers.filter(driver => driver.toLowerCase() == str.toLowerCase())
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(driver => driver.indexOf(str) == 0)
}


function matchName(drivers, str) {
  return drivers.filter(driver => driver.name == str)
}
