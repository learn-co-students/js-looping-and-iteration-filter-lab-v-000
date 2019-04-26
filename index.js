// Code your solution in this file
// function findMatching(drivers, string){
//   parsedDrivers = drivers.map(v => v.toLowerCase());
//   parsedString = string.toLowerCase();
//   parsedDrivers.filter(function (driver) { return driver === parsedString; });
// }

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, name) {
  return list.filter(function (driverName) {
    return driverName.startsWith(name);
  });
}

function matchName(list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
