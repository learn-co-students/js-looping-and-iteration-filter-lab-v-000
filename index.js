// Code your solution in this file
function findMatching(list, string){
  return list.filter(function (name) { return name.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function (name) { return name.toLowerCase()[0] === string.toLowerCase()[0]; });
}

function matchName(drivers, string){
  return drivers.filter(function (key) { return key.name === string})
}
