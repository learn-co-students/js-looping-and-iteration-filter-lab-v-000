// Code your solution in this file

function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(drivers, beginning) {
  return drivers.filter(function (driverName) {
    return beginning.toLowerCase() === driverName.toLowerCase().slice(0, beginning.length);
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
