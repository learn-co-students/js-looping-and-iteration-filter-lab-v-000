// Code your solution in this file

 function findMatching(drivers, name) {
   return drivers.filter(function (driver) {
     return driver.toLowerCase() === name.toLowerCase();
   })
 }

 function fuzzyMatch(drivers, string){
   return drivers.filter(function (driver){
     return driver.indexOf(string) > -1 && driver[0] === string[0]
   })
 }

function matchName(drivers, string){
  return drivers.filter(function(driver){
    return driver.name === string;
  })
}
