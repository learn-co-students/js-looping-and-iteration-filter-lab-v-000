// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(el) { return el.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(function(el) {return el.startsWith(str);});
}

function matchName(drivers, str) {
  return drivers.filter(function(obj) {return obj['name'] === str;});
}