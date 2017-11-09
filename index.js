// Code your solution in this file
function findMatching (drivers, name) {
   return drivers.filter(function(driver) { 
      return driver.toLowerCase() === name.toLowerCase();
   });
}

function fuzzyMatch(drivers, letters) {
   const lengthOfName = letters.length;
   return drivers.filter(function(driver) {
      return driver.slice(0, lengthOfName) === letters;
   });
}

function matchName(drivers, name) {
   return drivers.filter(function(driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
   });
}