function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return driver.toUpperCase() ===  name.toUpperCase(); });
};

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (driver) { return driver.startsWith(name); });
};

function matchName(drivers, name){
  return drivers.filter(function (driver) { return driver.name === name;});
};
