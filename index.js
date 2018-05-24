// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, string){
 return drivers.filter(function(driver){
   return driver.toLowerCase() === string.toLowerCase();
 })
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(driver){
    return string.toLowerCase() === driver.slice(0,string.length).toLowerCase();
  })
}

function matchName(drivers,string){
  return drivers.filter(function(driver){
    return driver.name.toLowerCase() === string.toLowerCase();
  })
}
