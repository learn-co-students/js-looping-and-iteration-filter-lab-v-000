// Code your solution in this file
function findMatching(drivers,driver){
   return drivers.filter(function(d){return driver.toUpperCase() === d.toUpperCase()} )
}
function fuzzyMatch(drivers,beginning_letters){
  return drivers.filter(function(d){return beginning_letters === d.slice(0,2)})
}
function matchName(drivers,name){
  return drivers.filter(function(d){return d['name'] === name})
}
