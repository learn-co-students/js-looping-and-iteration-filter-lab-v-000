// Code your solution in this file

function findMatching(ar, name) {
  return ar.filter(function(el)
  {
    return el.toLowerCase()===name.toLowerCase();
  })
}

function fuzzyMatch(ar, partialName) {
  let pNLength=partialName.length
  return ar.filter(function(el)
  {
    return el.slice(0, pNLength)===partialName;
  }
)
}

function matchName(ar, name) {
  return ar.filter(function(el) {
    return el.name.toLowerCase()===name.toLowerCase();
  })
}
