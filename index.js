// Code your solution in this f
function findMatching(drivers, name){
  return drivers.filter(word => word.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name){
  return drivers.filter(word => word.substring(0,2) == name.substring(0,2))
}
function matchName(drivers, name){
  return drivers.filter(word => word['name'] == name)
}
