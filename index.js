// Code your solution in this file

function findMatching(collection, name) {
  return collection.filter(function(driver) {
    return driver.toUpperCase() === name.toUpperCase();
  });
}

function fuzzyMatch(collection, letters) {
  return collection.filter(function(nameEach) {
    return nameEach.slice(0, letters.length) === letters;
  });
}

function matchName(collection, name) {
  return collection.filter(function(driver) {
    return driver.name === name;
  })
}
