// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
function findMatching(drivers, string){
  return drivers.filter(function (driver) { return driver.toUpperCase() === string.toUpperCase(); })
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function (driver) { return driver.slice(0,1) === string.slice(0,1); })
}

function matchName(drivers, string){
  return drivers.filter(function (driver) { return driver.name === string; })
}
