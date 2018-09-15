// Code your solution in this file

// drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
// string = 'Bobby'
// return value = ['Bobby', 'Bobby]
function findMatching(drivers, string) {
  let updatedDrivers = drivers.filter(function(driver) {
    return driver.toUpperCase() == string.toUpperCase();
  });

  return updatedDrivers;
}

function fuzzyMatch(drivers, string) {
  let prefixLength = string.length;
  let updatedDrivers = drivers.filter(function(driver) {
    return driver.substring(0, prefixLength) == string;
  });

  return updatedDrivers;
}

function matchName(drivers, string) {
  let updatedDrivers = drivers.filter(function(driver) {
    if (driver.name == string) {
      return true;
    } else {
      return false;
    }
  });

  return updatedDrivers;
}
