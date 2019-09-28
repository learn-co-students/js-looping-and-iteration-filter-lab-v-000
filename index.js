// Code your solution in this file
function findMatching(drivers, str) {
  return drivers.filter(word => word.toLowerCase() == str.toLowerCase())
}


function fuzzyMatch(drivers, str) {
  return drivers.filter(word => word.toLowerCase().startsWith(str.toLowerCase()) )
}

function matchName(drivers, str) {
  return drivers.filter(word => word.name == str)
}
