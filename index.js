// Code your solution in this file

function findMatching(array, name) {
  newArray = array.filter(function(driverName) { return name.toLowerCase() == driverName.toLowerCase(); })
  return newArray
}

function fuzzyMatch(array, name) {
  newArray = array.filter(function(driverName) {return name[0] === driverName[0] && name[1] === driverName[1];})
  return newArray

}

function matchName(array, driverName){
newArray = array.filter(function(driverName) {return array.name == driverName;})
return newArray
}
