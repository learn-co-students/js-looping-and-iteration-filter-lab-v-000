// Code your solution in this file


//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// findMatching() - returns all drivers that match the passed in name:
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

//  fuzzyMatch() - returns a driver if beginning provided letters match
function fuzzyMatch(list, partialName) {
  let lengthOfName = partialName.length;
    return list.filter(function(driverName){
    return driverName.slice(0, lengthOfName) === partialName;
});
}

//matchName() - Accesses the data structure to check if name matches
function matchName(list, name) {
  return list.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
