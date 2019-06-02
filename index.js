function findMatching(array, name) {
  return array.filter(function(element) {return element.toLowerCase() === name.toLowerCase() });
}

function fuzzyMatch(array, name) {
  return array.filter(function(element) {return element[0].toLowerCase() === name[0].toLowerCase() && element[1].toLowerCase() === name[1].toLowerCase()});
}

function matchName(array, name) {
  return array.filter(function(element) {return element.name === name });
}
