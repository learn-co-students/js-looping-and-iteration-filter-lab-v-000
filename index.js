// Code your solution in this file
const drivers = []
function findMatching(drivers, name){
  matches = drivers.filter(d => d.toUpperCase() === name.toUpperCase() );
  return matches
}

function fuzzyMatch(drivers, part){
  l = part.length
  matches = drivers.filter(d => d.slice(0,l) === part)
  return matches
}

function matchName(drivers, n){
  debugger
  matches = drivers.filter(d => d.name === n);
  return matches
}
