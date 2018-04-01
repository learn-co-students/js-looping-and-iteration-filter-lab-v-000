// Code your solution in this file

function findMatching(array, string) {
  let matches = [];
  for (const name of array) {
    if (name.toUpperCase() == string.toUpperCase()) {
      matches.push(name);
    }
  }
  return matches
}

function fuzzyMatch(array, string) {
  let matches = [];
  let len = string.length;
  for (const name of array) {
    if (name.substring(0, len).toUpperCase() == string.toUpperCase()) {
      matches.push(name)
    }
  }
  return matches
}

function matchName(array, string) {
  let matches = []
  for (const item of array) {
    if (item["name"].toUpperCase() == string.toUpperCase()) {
      matches.push(item);
    }
  }
  return matches;
}