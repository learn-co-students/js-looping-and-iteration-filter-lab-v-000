const drivers = [];

function findMatching(drivers, name) {
  return drivers.filter(function(driversName) {
      return driversName.toUpperCase() === name.toUpperCase();
  });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(driversName) {
    return driversName[0].toUpperCase() === name[0].toUpperCase();
  });
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name === name;
  });
}


