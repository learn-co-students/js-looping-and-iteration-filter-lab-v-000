// Code your solution in this file

function findMatching (drivers, searchName) {
  return drivers.filter(function (driver) {return driver.toLowerCase() === searchName.toLowerCase();} );
}

function fuzzyMatch (drivers, startingCharacters) {
  return drivers.filter(function (driver) {return driver.startsWith(startingCharacters);} );
}

function matchName (drivers, searchName) {
  return drivers.filter(function (driver) {return driver.name === searchName;} );
}
