function findMatching (collection, name) {
  const newCollection = collection.filter(function (user) {
    return user.toLowerCase() === name.toLowerCase();
  });
  return newCollection;
}

function fuzzyMatch (collection, letters) {
  const newCollection = collection.filter(function (user) {
    return user.substring(0, [letters.length]) === letters;
  });
  return newCollection;
}

function matchName (collection, name) {
  const newCollection = collection.filter(function (user) {
    return user.name === name;
  });
  return newCollection;
}
