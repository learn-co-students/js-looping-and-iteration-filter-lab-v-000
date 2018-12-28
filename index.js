function findMatching(collection, name) {
  return collection.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(collection, letters) {
  return collection.filter(function (driverName) {
    return driverName.slice(0, letters.length) === letters
  });
}

function matchName(collection, name) {
  return collection.filter(function (driverObj) {
    return driverObj.name.toLowerCase() === name.toLowerCase();
  });
}
