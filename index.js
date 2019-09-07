function findMatching (drivers, name) {
  return drivers.filter(function (matching) {
    return matching.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, partialName) {
  return drivers.filter(function (partial) {
    return partial.slice(0,(partialName.length)) === partialName;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function (matching) {
    return matching.name === name;
  });
}
