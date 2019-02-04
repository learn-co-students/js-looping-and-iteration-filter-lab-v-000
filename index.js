// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) {
    return string.toUpperCase() === driver.toUpperCase();
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    return string[0] === driver[0];
  })
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return string === driver['name'];
  })
}
