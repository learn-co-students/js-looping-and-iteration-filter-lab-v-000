// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (collection, name) {
  let selected_names = []
  collection.filter(function (driverName) {
     if (driverName.toUpperCase() === name.toUpperCase()) {
       selected_names.push(driverName)
     }
  });
  return selected_names;
}

function fuzzyMatch (collection, letter) {
  let selectedDrivers = [];

  collection.filter(function (driverName) {

    if (driverName.startsWith(letter)) {
      selectedDrivers.push(driverName);
    }
  });
  return selectedDrivers;
}

function matchName (collection, string) {
  matchedDrivers = [];

  collection.filter(function (driver) {
    if (driver.name === string) {
      matchedDrivers.push(driver);
    }
  })
  return matchedDrivers
}
