// Code your solution in this file
function findMatching (drivers, driver) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === driver.toLowerCase();
  });
}

function fuzzyMatch (drivers, partialName) {
  let lengthOfName = partialName.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase()
  });
}
