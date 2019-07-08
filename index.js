// Code your solution in this file
function findMatching(collection, string){
  const newCollection = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].toUpperCase() === string.toUpperCase()) {
      newCollection.push(collection[i]);
    }
  }

  return newCollection;
}

function fuzzyMatch(collection, string) {
  const len = string.length;
  const newCollection = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].slice(0, len) === string) {
      newCollection.push(collection[i]);
    }
  }

  return newCollection;
}

function matchName(collection, n) {
  const newCollection = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i]['name'] === n) {
      newCollection.push(collection[i]);
    }
  }

  return newCollection;
}