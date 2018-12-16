// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name) {
  return collection.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(collection, fuzzyName) {
  let nameLength = fuzzyName.length;
  return collection.filter(function (driverName) {
    return driverName.slice(0, nameLength) === fuzzyName
  });
}

function matchName (collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
