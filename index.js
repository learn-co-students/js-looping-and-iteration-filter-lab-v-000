// Code your solution in this file
function findMatching(array, name) {
  search_holder = []
  for (const person of array) {
    if ( person.toUpperCase() === name.toUpperCase() ) {
      search_holder.push(person);
    }
  } 
  return search_holder;
}

function fuzzyMatch(array, name) {
  search_holder = []
  for (const person of array) {
    if ( person.substring(0, name.length) == name ) {
      search_holder.push(person);
    }
  }
  return search_holder;
}

function matchName(array, name) {
  search_holder = []
  for (const person of array) {
    if (person.name === name) {
      search_holder.push(person);
    }
  }
  return search_holder;
}
