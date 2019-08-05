// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, entry) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase().indexOf(entry.toLowerCase()) === 0;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
