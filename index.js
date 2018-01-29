// Code your solution in this file
function findMatching(collection, name){
  return collection.filter(function(person) {
    return person.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(collection, name){
  return collection.filter(function(person){
    return person.slice(0, name.length) === name;
  });
}

function matchName(collection, name){
  return collection.filter(function(person) {
    return person.name.toLowerCase() === name.toLowerCase();
  });
}
