function findMatching (list, name) {
   return list.filter(function (driverName) {
     return driverName.toLowerCase() === name.toLowerCase();
   });
 }

 function fuzzyMatch (list, name) {
   let namelength = name.length
   return list.filter(function(driverName) {
     return driverName.slice(0,namelength) === name;
   })
 }

function matchName (list, name) {
  return list.filter(function(driver){
     return driver.name.toLowerCase() === name.toLowerCase()
   })
}
