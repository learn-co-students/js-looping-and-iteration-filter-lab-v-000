// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (driver) {
    return driver.indexOf(letters) > -1 && driver[0] === letters[0];
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  })
}
