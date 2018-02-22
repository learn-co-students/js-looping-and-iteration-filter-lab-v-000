// Code your solution in this file
function findMatching (collection, nameToMatch) {
  return collection.filter(function (driver) {
    return driver.toLowerCase() === nameToMatch.toLowerCase();
  });
}

function fuzzyMatch (collection, fuzzyName) {
  return collection.filter(function (driver) {
    return driver.slice(0, fuzzyName.length) === fuzzyName;
  });
}

function matchName (collection, nameToMatch) {
  return collection.filter(function (driver) {
    return driver.name === nameToMatch;
  });
}
