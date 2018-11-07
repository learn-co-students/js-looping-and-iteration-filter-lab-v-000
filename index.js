// Code your solution in this file

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, partial) {
  let length = partial.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, length) === partial;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}