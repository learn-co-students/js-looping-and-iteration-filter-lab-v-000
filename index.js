function findMatching(drivers, name) {
  return  drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, nameChar) {
  let name = nameChar.length;

  return drivers.filter(function (driver) {
      return driver.slice(0, name) === nameChar;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
