// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(x) {return x.toLowerCase() === string.toLowerCase();});
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(x) {return x.startsWith(string);});
}

function matchName(drivers, string) {
  return drivers.filter(function(x) {return x.name === string;});
}
