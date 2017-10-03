// Code your solution in this file

function findMatching(collection, name) {
  return collection.filter(function (item) {
    return item.toUpperCase() === name.toUpperCase();
  })
}

function fuzzyMatch(collection, string) {
  return collection.filter(function (item) {
    return item.slice(0, string.length).toUpperCase() === string.toUpperCase();
  })
}

function matchName(collection, string) {
  return collection.filter(function (item) {
    return item.name.toUpperCase() === string.toUpperCase();
  })
}
