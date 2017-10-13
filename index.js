function findMatching(drivers, string) {
  return drivers.filter(function(stringName) {
    return stringName.toLowerCase() === string.toLowerCase();
  })
}

function fuzzyMatch(drivers, string) {
  let nameLength = string.length;

  return drivers.filter(function (stringName) {
    return stringName.slice(0, nameLength) === string;
  })
}

function matchName(drivers, string) {
  return drivers.filter(function(stringName) {
    return stringName.name.toLowerCase() === string.toLowerCase();
  });
}