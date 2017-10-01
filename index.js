// Code your solution in this file
function findMatching(collection, string) {
  return collection.filter(function(element) {
    return element.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(collection, string) {
  let input = string.length
  return collection.filter(function(element) {
    return element.slice(0, input) === string;
  });
}
// string could be any size so determining its length is important!

function matchName(collection, string) {
  return collection.filter(function(element) {
    return element.name.toLowerCase() === string.toLowerCase();
  });
}

//dot notation on dot notation
