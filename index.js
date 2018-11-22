// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase();} );
}

function fuzzyMatch (drivers, included) {
  let length = included.length;
  return drivers.filter(function (driver) { return driver.slice(0, length) === included;} );
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) { return driver.name.toLowerCase() === name.toLowerCase();} );
}
