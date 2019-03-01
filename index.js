function findMatching (drivers, name) {
  return drivers.filter(function (matching) {
    return matching.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, partialName) {
  return drivers.filter(function (partialMatch) {
    return partialMatch.slice(0, (partialName.length)) === partialName;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}