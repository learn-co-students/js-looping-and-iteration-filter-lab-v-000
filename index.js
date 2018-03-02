// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (driverName) {
    return driverName.slice(0, 2) === letters;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName['name'] === name;
  });
}
