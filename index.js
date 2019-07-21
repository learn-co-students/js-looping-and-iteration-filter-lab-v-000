function findMatching(drivers, value) {
  const result = drivers.filter(function (driver) { return driver.toLowerCase() === value.toLowerCase(); });
  return result
}

function fuzzyMatch(drivers, value) {
  const result = drivers.filter(function (driver) { return driver.startsWith(value) });
  return result
}

function matchName(drivers, value) {
  const result = drivers.filter(function(driver) { return driver.name === value });
  return result 
}
