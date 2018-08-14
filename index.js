// Code your solution in this file
function findMatching(drivers, driver) {
  return drivers.filter(function (name) {
    return driver.toUpperCase() === name.toUpperCase();
  });
}

function fuzzyMatch(drivers, driver) {
  return drivers.filter(function (name) {
    return name.slice(0, driver.length) === driver;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toUpperCase() === name.toUpperCase();
  })
}
