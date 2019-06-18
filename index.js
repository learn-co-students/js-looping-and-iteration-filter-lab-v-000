// Code your solution in this file
function findMatching(array, name) {
  let matches = [];
  for (var i = 0; i < array.length; i++) {
    if ((name === array[i]) || (name.toLowerCase() === array[i])) {
      matches.push(array[i]);
    }
  }
  return matches;
}

function fuzzyMatch(array, string) {
  let matches = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].startsWith(string)) {
      matches.push(array[i]);
    }
  }
  return matches;
}

function matchName(array, name) {
  let match = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      match.push(array[i]);
    }
  }
  return match;
}
