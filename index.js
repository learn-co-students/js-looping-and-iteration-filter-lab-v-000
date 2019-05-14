// Code your solution in this file
function findMatching(drivers, name) {
  const matchingName = drivers.filter( function(searchName) { return searchName.toLowerCase() === name.toLowerCase();});
  return matchingName;
}

function fuzzyMatch(drivers, letter) {
  const matchingName = drivers.filter(function(name){return name.slice(0,2) === letter});
  return matchingName;
}

function matchName(drivers, name) {
  const matchingName = drivers.filter(function(driver){return driver.name === name});
  return matchingName;
}
