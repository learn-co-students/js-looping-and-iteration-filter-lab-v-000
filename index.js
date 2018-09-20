// Code your solution in this file

function findMatching(list, string) {
  return list.filter( function(driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(list, partial) {
  let partialLength = partial.length;

  return list.filter( function(driverName) {
    return driverName.slice(0, partialLength) === partial;
  });
}

function matchName(list, string) {
  return list.filter( function(driverName) {
    return driverName.name.toLowerCase() === string.toLowerCase();
  });
}
