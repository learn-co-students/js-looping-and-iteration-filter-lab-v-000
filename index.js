// Code your solution in this file
function findMatching(collection, name) {
  return collection.filter( function(collectionName) {
    return collectionName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(collection, name) {
  let nameLength = name.length;

  return collection.filter( function(collectionName) {
    return collectionName.slice(0, nameLength) === name;
  });
}

function matchName(collection, name) {
  return collection.filter( function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
