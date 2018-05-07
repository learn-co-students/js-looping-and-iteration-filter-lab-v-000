// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, initial) {
  return drivers.filter(function(driverName) {
    return initial === driverName.slice(0, initial.length);
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return string === driver.name;
  });
}
