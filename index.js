// Code your solution in this file
function findMatching(array, value) {
  return array.filter(function(name) {
    return name.toLowerCase() === value.toLowerCase();
  });
}

function fuzzyMatch(array, value) {
  return array.filter(function(name) {
    return name[0] === value[0] && name[1] === value[1];
  });
}

function matchName(nestedObject, value) {
  return nestedObject.filter(function(person) {
    return person.name === value;
  });
}
