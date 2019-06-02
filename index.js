// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, partialName) {
  let lengthOfName = partialName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
});
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() == name.toLowerCase();
  });
}
