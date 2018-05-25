function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}
