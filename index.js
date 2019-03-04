function findMatching (drivers, name) {
  return drivers.filter(function (nameMatch) {
    return nameMatch.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.slice(0, name.length) == name)
}

function matchName (drivers, name) {
  return drivers.filter(driver => driver.name == name)
}