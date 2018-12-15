// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sara', 'Bobby']

function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch(drivers, letters) {
  let nameLength = letters.length;
  return drivers.filter(function(name){
    return name.slice(0, nameLength) === letters;
  });
}
function matchName(drivers, name) {
  return drivers.filter(function(object) {
    for(const key in object) {
      return object[key].toLowerCase() === name.toLowerCase();
    }
  });
}
