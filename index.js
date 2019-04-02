
function findMatching(array, matchName) {
return array.filter(name => {return name.toUpperCase() === matchName.toUpperCase()})

}

function fuzzyMatch(array, string) {
  return array.filter(name => {return name.charAt() === string.charAt()})

}

function matchName(object, matchName) {
  return object.filter(key => {return key.name === matchName})

}
