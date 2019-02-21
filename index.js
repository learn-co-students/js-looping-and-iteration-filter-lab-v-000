// Code your solution in this file

function findMatching(collection, string) {
  return collection.filter( function(driverName) { return (driverName === string || driverName === string.toLowerCase()); });
}

function fuzzyMatch(collection, string) {
  return collection.filter(function(driverName) { return driverName[0] === string[0]; } );
}

function matchName(collection, string) {
  return collection.filter(function(driverObject) { return driverObject["name"] === string; } );
}
