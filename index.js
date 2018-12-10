// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function(arrObj){return arrObj.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch(array, string) {
  return array.filter(function(arrObj){return arrObj[0] === string[0];});
}

function matchName(array, string) {
  return array.filter(function(arrObj){return arrObj.name === string;});
}
