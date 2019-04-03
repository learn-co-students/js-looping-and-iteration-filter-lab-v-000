function findMatching(collection, driver){
  return collection.filter(el => el.toLowerCase() === driver.toLowerCase());
}

function fuzzyMatch(collection, letter){
   return collection.filter(el => el.indexOf(letter) === 0);
}

function matchName(collection, name){
  return collection.filter(el => el.name === name);

}
