// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter( n => n.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter ( s => string == s.slice(0,string.length))
}

function matchName(drivers, name){
  return drivers.filter (n => name == n.name)
}