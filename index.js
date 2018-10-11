// Code your solution in this file

function findMatching(collection, name) {
  return collection.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(collection, letters) {
  let lengthOfName = letters.length;
  return collection.filter(function (driver) {
    return driver.slice(0,lengthOfName) === letters;
  });
}

function matchName(collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
