// Code your solution in this file
function findMatching(drivers,str){
  list = drivers.filter(function(element){return element.toUpperCase()===str.toUpperCase()})
  return list
}

function fuzzyMatch(drivers,str){
  return drivers.filter(function(element){return element.startsWith(str)})
}

function matchName(drivers,str){
  return drivers.filter(function(element){return element.name === str})
}
