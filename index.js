
// Case-sensitive match for drivers whose name matches the name passed in params
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  });
}

// Case-insensitive match for the driver names whose first letters match the letters passed
function fuzzyMatch(drivers, letters){
  return drivers.filter(function (driverName) {
    return (driverName[0] + driverName[1] === letters)
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  });
}
