// Code your solution in this file
function findMatching(drivers, name) {
  x = drivers.filter(function (driver_name) { if (driver_name.toUpperCase() == name.toUpperCase()) {return driver_name}; });
  return x
}

function fuzzyMatch(drivers, string) {
  length = string.length;
  x = 3
  x = drivers.filter(function (driver_name) { if (driver_name.startsWith(string)) { return driver_name[0][0]}; });
  return x
}

function matchName(drivers, name) {
  x = drivers.filter(function (driver) { if (driver.name == name) {return driver}; });
  return x
}
