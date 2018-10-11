// Code your solution in this file
function findMatching(array, string){
  return array.filter(function(name) {return name.charAt(0).toUpperCase() + name.slice(1) === string})
}

function fuzzyMatch(array, string){
  return array.filter(function(name) {return name.slice(0,2) === string })
}


function matchName(objects, string){
  return objects.filter(function(object){return object.name === string})
}
