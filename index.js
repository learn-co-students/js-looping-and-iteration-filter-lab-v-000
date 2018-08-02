// Code your solution in this file
function findMatching(array, query){

  const result = array.filter(name => name.toLowerCase() == query.toLowerCase());

  return result;
}

function fuzzyMatch(array, query){
  const result = array.filter(name => name.startsWith(query));

  return result;
}

function matchName(array, name) {
  const result = array.filter(function(person) { return person.name.toLowerCase() === name.toLowerCase(); });

  return result;
}
