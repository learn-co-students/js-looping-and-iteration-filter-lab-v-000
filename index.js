function findMatching (collection, name) { 
  return collection.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (collection, nameChars) {
  let nameLength = nameChars.length
  return collection.filter(function (driverName) {
    return driverName.slice(0, nameLength) === nameChars;
  });
}

function matchName (collection, name) {
  return collection.filter(function (driver) {
   return driver.name.toLowerCase() === name.toLowerCase();
  });
}