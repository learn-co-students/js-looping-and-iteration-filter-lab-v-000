// Code your solution in this file
 function findMatching(drivers, name){
  return drivers.filter(list_item => {
     return list_item.toUpperCase() === name.toUpperCase();
   });
 }

 function fuzzyMatch(drivers, string){
   return drivers.filter(list_item => {
     return list_item.slice(0,string.length) == string
   })
 }

 function matchName(drivers, name){
   return drivers.filter(driver=> {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
 }
