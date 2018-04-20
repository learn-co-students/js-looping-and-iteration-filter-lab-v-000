// Code your solution in this file
function findMatching (collection, name) {
  const matches = collection.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase()});
  return matches;
}

function fuzzyMatch(collection, startOfName) {
  const matches = collection.filter( function(name) {
    return name.startsWith(startOfName)
  });
  return matches;
}

function matchName(collection, name) {
  const matches = collection.filter(function(driver){return driver.name === name});
  return matches;
}
