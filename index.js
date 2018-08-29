// Code your solution in this file

//returns all drivers that match the passed in name
function findMatching(list, name) {
  return list.filter(function (driverName) { if (driverName.toLowerCase() === name.toLowerCase()){return list;} });
}

//returns a driverif beginning  provided letter match
function fuzzyMatch(list, partialName) {
  return list.filter(function (driverName) { if (partialName === driverName.slice(0,partialName.length)) {return driverName;} });
}

//access the data structure to check if name matches
function matchName(list, name) {
  return list.filter(function (driver) {return driver.name.toLowerCase() === name.toLowerCase(); });
}
