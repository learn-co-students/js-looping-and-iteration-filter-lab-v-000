// Code your solution in this file
function findMatching(array, condition) {
  return array.filter(instance => instance.toLowerCase() === condition.toLowerCase());
}

function fuzzyMatch(array, partialName) {
  return array.filter(instance => instance.startsWith(partialName));
}

function matchName(array, name) {
  return array.filter(instance => instance.name === name);
}
