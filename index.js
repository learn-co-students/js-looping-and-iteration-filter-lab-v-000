const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(collection, name) {
  let matchedNames = []
  collection.filter(function (driverName) {
    if (driverName.toLowerCase() === name.toLowerCase()) {
      matchedNames.push(driverName)
    }
  })
  return matchedNames;
}

function fuzzyMatch (collection, letter) {
  let matchedDrivers = [];
  collection.filter(function (driverName) {
    if (driverName.startsWith(letter)) {
      matchedDrivers.push(driverName);
    }
  })
  return matchedDrivers;
}

function matchName (collection, string) {
  return collection.filter(function (driverName) {
    return driverName['name'] === string;
  });
}
