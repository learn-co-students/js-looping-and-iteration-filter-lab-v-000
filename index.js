// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.startsWith(name);
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    if (driver.name === name) {
      return driver;
    };

  });
}
