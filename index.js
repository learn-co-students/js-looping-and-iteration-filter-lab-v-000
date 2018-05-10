// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function(driverName){
    return driverName.toLowerCase() === string.toLowerCase();
  });
}


function fuzzyMatch(list, newString){
  let lengthOfName = newString.length;
  return list.filter(function(driverName){
    return driverName.slice(0, lengthOfName) === newString;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
