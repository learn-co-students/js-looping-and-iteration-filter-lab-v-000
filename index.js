function findMatching(drivers, string) {
  return drivers.filter(function (driver) { return driver.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch(drivers, string) {
  function cb(driver) {
    const driverMatch = driver.slice(0, string.length);
    return driverMatch.toLowerCase() === string.toLowerCase();
  }
  return drivers.filter(cb);
}


function matchName(drivers, string) {

  function cb(driverObj) {
    return driverObj['name'] === string;
  }
  return drivers.filter(cb);


}
