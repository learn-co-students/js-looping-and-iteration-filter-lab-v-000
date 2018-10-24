function findMatching(drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  });
};

function fuzzyMatch(drivers, fuzzName) {
  let nameLength = fuzzName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === fuzzName;
  });
};

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  })
};