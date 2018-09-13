// Code your solution in this file
function findMatching(drivers, driverName) {
  return  drivers.filter(function (name) {return  name.toLowerCase() == driverName.toLowerCase(); });
}

function fuzzyMatch(drivers, driver) {
  return  drivers.filter(function (name) {return  name[0].toLowerCase() == driver[0].toLowerCase(); });
}

function matchName(drivers, driverName) {
  return  drivers.filter(function (driver) {return  driver.name == driverName; });
}
