// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (driver) {
     return driver.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch (drivers, providedLetters) {
  return drivers.filter(function (driver) {
    return driver.slice(0, providedLetters.length) === providedLetters
  })
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  })
}
