// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name){ 
return collection.filter(function (driverName) {
  return name.toLowerCase() === driverName.toLowerCase();
})
}

function fuzzyMatch(collection, letter){
  return collection.filter(function (driver) {
    return driver.slice(0, letter.length) === letter;
  })
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string;
  })
}