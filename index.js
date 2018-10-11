// Code your solution in this file
function findMatching(array, string){
  return array.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
  return array.filter(function(name) {return name.slice(0,2) === string })
}


function matchName(objects, string){
  return objects.filter(function(object){return object.name === string})
}
