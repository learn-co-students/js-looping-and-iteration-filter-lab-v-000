
function findMatching (drivers, name) {
  return drivers.filter(function (driver) {return driver.toLowerCase() == name.toLowerCase(); });
}

function fuzzyMatch (drivers, substring) {
  return drivers.filter(function (driver) {return driver.toLowerCase().startsWith(substring.toLowerCase()); });
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {return driver.name.toLowerCase() == name.toLowerCase();})
}
