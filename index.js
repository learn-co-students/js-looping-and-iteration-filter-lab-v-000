// Code your solution in this file
function findMatching (object, name) {
  return object.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (object, partialMatch) {
  let lengthOfName = partialMatch.length;
  return object.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialMatch;
  });
}

function matchName(object, name){
  return object.filter(function (driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
