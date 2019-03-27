// Code your solution in this file

function findMatching(array, string) {
  result = array.filter(function (name) { return name.toUpperCase() === string.toUpperCase() });
  return result;
}

function fuzzyMatch(array, string) {
  result = array.filter(function (name) { return name[0] + name[1] === string });
  return result;
}

function matchName(array, string) {
  result = array.filter(function (obj) { return obj.name === string });
  return result;
}
