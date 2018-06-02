// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
    return string.match(new RegExp(driver, "i"));
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.match(new RegExp("^" + string, "i"));
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name === string;
  });
}
