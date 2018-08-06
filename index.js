// Code your solution in this file

function findMatching(array, individualName) {
return array.filter(function(name){return name.toUpperCase() === individualName.toUpperCase(); })
}


function fuzzyMatch(array, individualName) {
return array.filter(function(name){return name.charAt() === individualName.charAt(); })
}

function matchName(object, individualName) {
  return object.filter(function(name){return name.name === individualName; })

}
