function findMatching (drivers, name) {
  return drivers.filter(function(driversName) {
    return driversName.toLowerCase() == name.toLowerCase();
  });
}

function fuzzyMatch (drivers, letters) {
  let firstLettersOfName = letters.length;
  return drivers.filter(function(driversName) {
    return driversName.slice(0, firstLettersOfName) === letters;
  });
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
