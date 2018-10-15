function findMatching(drivers, string) {
  return (drivers.filter(driver => driver.toLowerCase() === string.toLowerCase()));
}

function fuzzyMatch(drivers, string) {
  return (drivers.filter(driver => driver.substring(0,2) === string.substring(0,2)));
}

function matchName(drivers, string) {
  return (drivers.filter(driver => driver.name === string));
}
