// Code your solution in this file


function findMatching(collection, driver) {
   return collection.filter(function (name) {
         return driver.toUpperCase() === name.toUpperCase();

    });
} 

function fuzzyMatch(collection, driver) {
    return collection.filter(function (name){
        let nameLength = driver.length
        return (name.slice(0, nameLength) === driver)
         
    });
    
}

 function matchName(collection, driverName) {
      return collection.filter(function (driver) {
          
       return driver.name.toUpperCase() === driverName.toUpperCase()
      });
 }