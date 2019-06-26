function findMatching(drivers, name) {
  return drivers.filter(driver => name.toLowerCase() === driver.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  let regex = new RegExp('^' + string);
  return drivers.filter(driver => driver.match(regex));
}

function matchName(drivers, name) {
  return drivers.filter(driver => name === driver.name);
}
