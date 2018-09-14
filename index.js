// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (drivername) { return drivername.toLowerCase() == name.toLowerCase()})
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (drivername) { return drivername.slice(0, letters.length) === letters})
}

function matchName(drivers, name) {
  return drivers.filter(function(drivername) {return drivername.name === name})
}
