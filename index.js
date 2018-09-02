// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) { return driverName.toUpperCase()=== name.toUpperCase();});
}

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters) );

  }

  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
