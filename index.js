// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.toUpperCase() === string.toUpperCase();
  });
};

function fuzzyMatch(drivers, string) {
  let nameChar = string.length;

  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameChar) === string;
  });
};

function matchName(drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.name.toUpperCase() === string.toUpperCase();
  });
};
