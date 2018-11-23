// Code your solution in this file

function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, startName) {
  let lengthOfName = startName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === startName;
  });
}

function matchName(driver, name) {
  return driver.filter(function (driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
