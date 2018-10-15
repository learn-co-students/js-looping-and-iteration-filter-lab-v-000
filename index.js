// Code your solution in this file
function findMatching(collection, name) {
  return collection.filter(function(theName) { return theName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(collection, letters) {
  return collection.filter(function(name) { return name.slice(0, letters.length).toLowerCase() === letters.toLowerCase();
  });
}

function matchName(collectionOfObjects, name) {
  return collectionOfObjects.filter(function(object) {
    return object.name.toLowerCase() === name.toLowerCase();
  });
}
