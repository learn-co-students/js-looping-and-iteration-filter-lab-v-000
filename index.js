// Code your solution in this file
function findMatching(drivers, name) {
   return drivers.filter(function(driver) {
       return driver.toLowerCase() === name.toLowerCase()
    });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function(driver) {
        return driver.startsWith(letters);
    })
  }
  
 function matchName(drivers, match) {
    return drivers.filter(function(driver) {
        return driver['name'] === match
     });
 }