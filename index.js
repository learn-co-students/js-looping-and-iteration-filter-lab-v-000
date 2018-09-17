// Code your solution in this file
function findMatching(array, name) {
  return array.filter(aValue => aValue.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(array, letters) {
  return array.filter(aValue => aValue.startsWith(letters));
}

function matchName(array, name) {
  return array.filter(obj => obj.name === name);
}
