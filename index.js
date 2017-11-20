// Code your solution in this file

function findMatching(collection, name) {
  return collection.filter(function(n){
    return name.toLowerCase() === n.toLowerCase();
  });
}

function fuzzyMatch(collection, combination){
  let com = combination.length;
  return collection.filter(function(name){
    return name.slice(0, com) === combination;
  })
}

function matchName(collection, name){
  return collection.filter(function(driver){
    return driver.name === name;
  })
}
