// Code your solution in this file

    
function findMatching(array, name) {
  return array.filter(function(driverName){return name.toLowerCase() === driverName.toLowerCase()});
}

function fuzzyMatch (array, string) {
  let stringLength = string.length;
  return array.filter(function(driverName) {
    return driverName.slice(0, stringLength) === string;
  })
}

function matchName(array, string) {
  return array.filter(function(driver) {return driver.name === string});
}