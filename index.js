function findMatching (drivers, string) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch (drivers, letters) {
  let lengthOfName = letters.length;

  return drivers.filter(function (name) {
    return name.slice(0, lengthOfName) === letters;
  })
}

function matchName (drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  })
}
