// Code your solution in this file

function findMatching(drivers, name) {
  const d = drivers.filter(function(driver) {return driver.toUpperCase() === name.toUpperCase()});
  return d;
}

function fuzzyMatch(drivers, letters) {
  const l = drivers.filter(function(driver) { return driver.startsWith(letters)});
  return l;
}

function matchName(drivers, string) {
  const d = drivers.filter(function(driver) {return driver.name === string})
  return d
}