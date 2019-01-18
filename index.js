function findMatching(collection, name) {
  return collection.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(collection, name) {
  let nameBeginsWith = name.length;
  
  return collection.filter(function (driver) { return driver.slice(0, nameBeginsWith) === name;});
}

function matchName(collection, name) {
  return collection.filter(function (driver) {return driver.name === name;});
}