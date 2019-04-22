// Code your solution in this file
 function findMatching(driversNames, nameToMatch) {
  return driversNames.filter(name => {
    return name.toLowerCase() === nameToMatch.toLowerCase();
  });
 }

 function fuzzyMatch(drivers, letters){
   return drivers.filter(function(name) {
     return name.slice(0,letters.length)===letters;
   })
 }

 function matchName(drivers, name) {
   return drivers.filter(function(driver){
     return driver.name === name;
   })

 }
