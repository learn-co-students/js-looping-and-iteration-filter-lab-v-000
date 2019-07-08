function findMatching (drivers, name){
  return drivers.filter(function (driver) {return driver.toUpperCase() === name.toUpperCase()});
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (driver) {return driver[1] === name[1]});
}

function matchName(collection, name) {
  return collection.filter(function (driver) { return driver.name === name; });
}
