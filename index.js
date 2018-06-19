const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return driver.toUpperCase() === name.toUpperCase()} );
  }

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (name) {
    return letters[0] === name[0];
  }
  );
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name.toUpperCase() === string.toUpperCase();
  });
}
