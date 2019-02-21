// Code your solution in this file

function findMatching(collection, name) {
  const newCollection = [];

  for (const person of collection) {
    if (person.toLowerCase() === name.toLowerCase()) {
      newCollection.push(person);
    }
  }
  return newCollection;
}


function fuzzyMatch(collection, letters) {
  const newCollection = [];

  for (const name of collection) {
    if (letters === name.substring(0, letters.length)) {
      newCollection.push(name);
    }
  }
  return newCollection;
}

function matchName(collection, name) {
  newCollection = [];

  for (const user of collection) {
    if (user.name === name) {
      newCollection.push(user);
    }
  }
  return newCollection;
}
