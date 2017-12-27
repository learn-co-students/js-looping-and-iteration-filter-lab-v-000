function findMatching(array, string) {
  return array.filter(function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(array, string) {
  return array.filter(function (driver) {
    return driver.toLowerCase().slice(0, 2) === string.toLowerCase();
  });
}

function matchName(array, string) {
  return array.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}
