// Code your solution in this file

function findMatching(array, string) {
  return array.filter(function(name) {return name.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(array, letters) {
  return array.filter(function(string) {return letters === string.slice(0,2); });
}

function matchName(array, string) {
  return array.filter(function(obj) {return obj.name === string; });
}
