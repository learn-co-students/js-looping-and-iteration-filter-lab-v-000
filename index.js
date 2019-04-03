function findMatching(drivers, name) {
  const result = drivers.filter( driver => driver.toLowerCase() === name.toLowerCase());
  return result;
}

function fuzzyMatch(drivers, name) {
  const result = drivers.filter(driver => driver.substring(0, 2).includes(name));
  return result;
}

function matchName(drivers, name) {
  const result = drivers.filter(driver => driver.name === name);
  return result;
}
