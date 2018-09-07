// Code your solution in this file

function findMatching(drivers, name) {
  const new_drivers_array = drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });
  return new_drivers_array;
}

function fuzzyMatch(drivers, letters) {
  const new_drivers_array = drivers.filter(function (driver) { return driver.slice(0, 2) === letters; });
  return new_drivers_array;
}

function matchName(drivers, name) {
  const new_drivers_array = drivers.filter(function (driver) { return driver.name === name; });
  return new_drivers_array;
}
