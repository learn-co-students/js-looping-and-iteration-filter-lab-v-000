function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters) {
  let lengthOfLetters = letters.length ;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfLetters) === letters;
  });
}

function matchName(drivers, nameValue) {
  return drivers.filter(function (driverName) {
    return driverName['name'] === nameValue;
  });
}