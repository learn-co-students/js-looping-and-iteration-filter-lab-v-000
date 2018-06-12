// Code your solution in this file

function findMatching(drivers, name){
  
  return drivers.filter(function (driverName) { return driverName.toUpperCase() === name.toUpperCase();});
  
}

function fuzzyMatch(drivers, name){
  
  const partialNameLength = name.length;
  
  return drivers.filter(function (driverName) { return driverName.slice(0, partialNameLength) === name;});
  
}

function matchName(drivers, name){
  
  return drivers.filter(function (driverObject) {return driverObject.name.toUpperCase() === name.toUpperCase();})
  
}