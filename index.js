// Code your solution in this file
function findMatching (drivers, name){
  return drivers.filter(function (driverName) {return driverName.toLocaleLowerCase() === name.toLocaleLowerCase()});
}
function fuzzyMatch(drivers, beginningLetters){
  return drivers.filter(function(driverName){return driverName.substr(0, beginningLetters.length) === beginningLetters })
}
function matchName(drivers, name){
  return drivers.filter(function (driver){return driver.name===name})
}
