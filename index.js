// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(n){ return n.toUpperCase() === name.toUpperCase() })
}

function fuzzyMatch(drivers, letters){
  return drivers.filter(function(l){ return l.startsWith(letters) })
}

function matchName(drivers, name){
  return drivers.filter(function(n){
    return n.name === name
  })
}