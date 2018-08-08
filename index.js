// Code your solution in this file
function findMatching(collection, name){
  const newCollection = [];
  for (const user of collection) {
    if (user.toLowerCase() === name.toLowerCase()) {
      newCollection.push(user);
    }

  }

  return newCollection;


}



function fuzzyMatch(collection, name){

  const newCollection = [];
  for (const user of collection) {
    if (user.toLowerCase().charAt(0) === name.toLowerCase().charAt(0) && user.match(name)) {

        newCollection.push(user);

    }
  }

  return newCollection;
}





function matchName(collection, name){

  const newCollection = [];
  for (const user of collection) {
    if (user.name.toLowerCase() === name.toLowerCase()) {
      newCollection.push(user);
    }

  }

  return newCollection;

}
