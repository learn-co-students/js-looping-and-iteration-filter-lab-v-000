// Code your solution in this file
function findMatching(drivers, driverName) {
  return drivers.filter(function (driver) {return driver.toUpperCase() === driverName.toUpperCase()});
}

function matchName (drivers, driverName) {
  return drivers.filter(function (driver) {return driver.name === driverName});
}

function fuzzyMatch(drivers, startLetters) {
  let match;
  return drivers.filter(function (driver) {
    for (let i = 0; i < startLetters.length; i++) {
      if (driver[i] === startLetters[i]) {
        match = true;
      }
      else {
        match = false;
      }
    }
    return match;
  })
}
