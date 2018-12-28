function findMatching(collection, name) {
  return collection.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase() });
}

function fuzzyMatch(collection, letters) {
  return collection.filter(function (driver) { return driver.slice(0, letters.length) === letters });
}

function matchName(collection, name) {
  return collection.filter(function (driverObj) { return driverObj.name === name });
}
