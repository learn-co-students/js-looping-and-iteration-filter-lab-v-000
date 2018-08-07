function findMatching (collection, name)  {
  return collection.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (collection, name) {
  return collection.filter(function (driver) {
    return name[0] === driver[0]
  })
}

function matchName (collection, name) {
  return collection.filter(function (driver) {
    return driver.name == name
  })
}
