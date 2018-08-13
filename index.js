function findMatching (drivers, name) {
  return drivers.filter(function (element) {
    return element.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, string) {
  return drivers.filter(function (element) {
    return element.indexOf(string) === 0;
  });
}

function matchName (drivers, driverName) {
  return drivers.filter(function (driverObject) {
    return driverObject.name.toLowerCase() === driverName.toLowerCase();
  });
}
