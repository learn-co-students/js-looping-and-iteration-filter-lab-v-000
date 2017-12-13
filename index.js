function findMatching (drivers, string) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch (drivers, string) {
  return drivers.filter(function (letters) {
    return letters[0] + letters[1] === string;
  })
}

function matchName (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  })
}
