//Code your solution in this file
// My favorite solution
function findMatching(collection,name){
    return collection.filter(element => element.toUpperCase() === name.toUpperCase());
}
/*
-------------Cross of solutions------------------
function findMatching(collection,name){
    return collection.filter(function(element) {
        return element.toUpperCase() === name.toUpperCase();
    });
}


 -------------FLATIRON soln -------------------

function findMatching (list, name) {
    return list.filter(function (driverName) {
      return driverName.toLowerCase() === name.toLowerCase();
    });
  }
*/   

function fuzzyMatch(drivers, string){
    return drivers.filter(driver => driver.slice(0,2).toUpperCase() === string.toUpperCase())
}
/* ------------FLATIRON SOLN----------------
function fuzzyMatch(drivers, string){
    return drivers.filter(function (driver) {
        return driver.slice(0,2).toUpperCase() === string.toUpperCase()
    });
}
*/

function matchName(collection,name){
    return collection.filter(element => element.name.toUpperCase() === name.toUpperCase());
}

/* ------------FLATIRON soln-------------------
function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
*/