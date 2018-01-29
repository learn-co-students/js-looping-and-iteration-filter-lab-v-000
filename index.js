function findMatching(collection, query) {
 return collection.filter(function (el) {
   return el.toLowerCase() === query.toLowerCase();
   })
}

function fuzzyMatch(collection, query) {
  return collection.filter(function (el) {
    return el[0] === query[0]
  }) 
}

function matchName(collection, query) {
  return collection.filter(function (el) {
     return el['name'] === query 
  })
}