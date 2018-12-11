// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(n) {return n.toLowerCase() == name.toLowerCase();});
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(n) {return n.toLowerCase().slice(0, letters.length) == letters.toLowerCase();});
}

function matchName(drivers, title) {
  return drivers.filter(function(n) {return n.name.toLowerCase() == title.toLowerCase();});
}
