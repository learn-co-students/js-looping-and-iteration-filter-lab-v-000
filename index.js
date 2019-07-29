// Code your solution in this file
function findMatching(collection, name) {
  return collection.filter(function (element) {return element.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch(collection, initials) {
  const slice_up_to = initials.length;
  return collection.filter(function (element) {return element.slice(0, slice_up_to) === initials;});
}

function matchName(collection, name) {
  return collection.filter(function (element) {return element.name.toLowerCase() === name.toLowerCase();});
}
