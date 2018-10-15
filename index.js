// Code your solution in this file
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, string) {
  let lengthOfString = string.length;
  return list.filter(function(driverName){
    return driverName.slice(0, lengthOfString) === string;
  });
}

function matchName(list, name){
  return list.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
