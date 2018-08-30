function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(drivers, string) {
  let l = string.length
  return drivers.filter(driver => driver.slice(0, l) === string)
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}
