// Code your solution in this file

function  findMatching(collection, input){
  return collection.filter(function (name) {return name.toLowerCase() === input.toLowerCase() })
}

function fuzzyMatch (collection, partialName) {
  let lengthOfName = partialName.length;
  return collection.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (collection, name) {
  return collection.filter(function (collection) {
    return collection.name.toLowerCase() === name.toLowerCase();
  });
}
