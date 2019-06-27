
function findMatching(drivers, query) {
    let driverMatch = [];
    driverMatch = drivers.filter(function (driver) { return driver.toLowerCase() === query.toLowerCase()});
    return driverMatch;
}

function fuzzyMatch(drivers, letters) {
  let stringLength = letters.length;
  let driverMatch = drivers.filter(function (driver) {return driver.slice(0, stringLength) == letters });
  return driverMatch;

}

function matchName(drivers, query) {
  let nameMatch = drivers.filter(function (driver) {return driver.name == query});
  return nameMatch;
}
