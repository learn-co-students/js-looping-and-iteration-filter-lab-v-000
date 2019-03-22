// Code your solution in this file

function findMatching(collection, name){
  const result = collection.filter(n => n.toLowerCase()=== name.toLowerCase());
  return result;
}

function fuzzyMatch(collection, initials){
  const result = collection.filter(n => n.startsWith(initials));
  return result;
}

function matchName(collection, name){
  const newCollection = [];

  for (const user of collection) {
    if (user.name === name) {
      newCollection.push(user);
    }
  }

  return newCollection;
}
