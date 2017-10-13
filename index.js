function findMatching (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, partial) {
  const length = partial.length;
  return drivers.filter(function (driver) {
    return driver.slice(0, length) === partial;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}