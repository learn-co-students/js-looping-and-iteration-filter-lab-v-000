// Code your solution in this file

function findMatching(collection, name) {
  return collection.filter(function(person) {return person === name || person === name.toLowerCase()});
}

function fuzzyMatch(collection, name) {
  return collection.filter(function(person) {return person.slice(0,2) === name.slice(0,2)});
}

function matchName(collection, person) {
  return collection.filter(function(object) {return object.name === person});
}